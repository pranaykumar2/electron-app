// @flow

import Button from '@atlaskit/button';
import { FieldTextStateless } from '@atlaskit/field-text';
import { SpotlightTarget } from '@atlaskit/onboarding';
import Page from '@atlaskit/page';
import { AtlasKitThemeProvider } from '@atlaskit/theme';

import { generateRoomWithoutSeparator } from '@jitsi/js-utils/random';
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { compose } from 'redux';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Navbar } from '../../navbar';
import { Onboarding, startOnboarding } from '../../onboarding';
import { RecentList } from '../../recent-list';
import { createConferenceObjectFromURL } from '../../utils';
import logoImage from '../../../images/onboarding.png';

import {
    Body,
    FieldWrapper,
    Form,
    Header,
    Label,
    SectionTitle,
    Wrapper
} from '../styled';

// Import the fonts CSS
import '../styled/fonts.css';

type Props = {

    /**
     * Redux dispatch.
     */
    dispatch: Dispatch<*>;

    /**
     * React Router location object.
     */
    location: Object;

    /**
     * I18next translate function.
     */
    t: Function;
};

type State = {

    /**
     * Timer for animating the room name generation.
     */
    animateTimeoutId: ?TimeoutID,

    /**
     * Generated room name.
     */
    generatedRoomname: string,

    /**
     * Current room name placeholder.
     */
    roomPlaceholder: string,

    /**
     * Timer for re-generating a new room name.
     */
    updateTimeoutId: ?TimeoutID,

    /**
     * URL of the room to join.
     * If this is not a url it will be treated as room name for default domain.
     */
    url: string;

    /**
     * Animation state for the welcome elements.
     */
    animationComplete: boolean;
};

/**
 * Welcome Component.
 */
class Welcome extends Component<Props, State> {
    /**
     * Initializes a new {@code Welcome} instance.
     *
     * @inheritdoc
     */
    constructor(props: Props) {
        super(props);

        // Initialize url value in state if passed using location state object.
        let url = '';

        // Check and parse url if exists in location state.
        if (props.location.state) {
            const { room, serverURL } = props.location.state;

            if (room && serverURL) {
                url = `${serverURL}/${room}`;
            }
        }

        this.state = {
            animateTimeoutId: undefined,
            generatedRoomname: '',
            roomPlaceholder: '',
            updateTimeoutId: undefined,
            url,
            animationComplete: false
        };

        // Bind event handlers.
        this._animateRoomnameChanging = this._animateRoomnameChanging.bind(this);
        this._onURLChange = this._onURLChange.bind(this);
        this._onFormSubmit = this._onFormSubmit.bind(this);
        this._onJoin = this._onJoin.bind(this);
        this._updateRoomname = this._updateRoomname.bind(this);
    }

    /**
     * Start Onboarding once component is mounted.
     * Start generating random room names.
     *
     * NOTE: It automatically checks if the onboarding is shown or not.
     *
     * @returns {void}
     */
    componentDidMount() {
        this.props.dispatch(startOnboarding('welcome-page'));

        this._updateRoomname();

        // Set animation complete after initial animations
        setTimeout(() => {
            this.setState({
                animationComplete: true
            });
        }, 1500);
    }

    /**
     * Stop all timers when unmounting.
     *
     * @returns {void}
     */
    componentWillUnmount() {
        this._clearTimeouts();
    }

    /**
     * Render function of component.
     *
     * @returns {ReactElement}
     */
    render() {
        return (
            <Page navigation = { <Navbar /> }>
                <AtlasKitThemeProvider mode = 'light'>
                    <Wrapper>
                        { this._renderHeader() }
                        { this._renderBody() }
                        <Onboarding section = 'welcome-page' />
                    </Wrapper>
                </AtlasKitThemeProvider>
            </Page>
        );
    }

    _animateRoomnameChanging: (string) => void;

    /**
     * Animates the changing of the room name.
     *
     * @param {string} word - The part of room name that should be added to
     * placeholder.
     * @private
     * @returns {void}
     */
    _animateRoomnameChanging(word: string) {
        let animateTimeoutId;
        const roomPlaceholder = this.state.roomPlaceholder + word.slice(0, 1);

        if (word.length > 1) {
            animateTimeoutId
                = setTimeout(
                () => {
                    this._animateRoomnameChanging(
                        word.substring(1, word.length));
                },
                70);
        }
        this.setState({
            animateTimeoutId,
            roomPlaceholder
        });
    }

    /**
     * Method that clears timeouts for animations and updates of room name.
     *
     * @private
     * @returns {void}
     */
    _clearTimeouts() {
        clearTimeout(this.state.animateTimeoutId);
        clearTimeout(this.state.updateTimeoutId);
    }

    _onFormSubmit: (*) => void;

    /**
     * Prevents submission of the form and delegates the join logic.
     *
     * @param {Event} event - Event by which this function is called.
     * @returns {void}
     */
    _onFormSubmit(event: Event) {
        event.preventDefault();
        this._onJoin();
    }

    _onJoin: (*) => void;

    /**
     * Redirect and join conference.
     *
     * @returns {void}
     */
    _onJoin() {
        const inputURL = this.state.url || this.state.generatedRoomname;
        const conference = createConferenceObjectFromURL(inputURL);

        // Don't navigate if conference couldn't be created
        if (!conference) {
            return;
        }

        this.props.dispatch(push('/conference', conference));
    }

    _onURLChange: (*) => void;

    /**
     * Keeps URL input value and URL in state in sync.
     *
     * @param {SyntheticInputEvent<HTMLInputElement>} event - Event by which
     * this function is called.
     * @returns {void}
     */
    _onURLChange(event: SyntheticInputEvent<HTMLInputElement>) {
        this.setState({
            url: event.currentTarget.value
        });
    }

    /**
     * Renders the body for the welcome page.
     *
     * @returns {ReactElement}
     */
    _renderBody() {
        return (
            <Body>

                <div className = 'recent-meetings-container'>
                    <SectionTitle style = {{ color: '#FFFFFF' }}>Recent Meetings</SectionTitle>
                    <RecentList />
                </div>
            </Body>
        );
    }

    /**
     * Renders the header for the welcome page.
     *
     * @returns {ReactElement}
     */
    _renderHeader() {
        const locationState = this.props.location.state;
        const locationError = locationState && locationState.error;
        const { t } = this.props;

        return (
            <Header>
                <div className = 'welcome-heading'>Welcome to Vignan Meet</div>
                <div className = 'welcome-subheading'>An Intranet Based Video Conferencing Application</div>
                <SpotlightTarget name = 'conference-url'>
                    <Form onSubmit = { this._onFormSubmit }>
                        <Label>{t('enterConferenceNameOrUrl')}</Label>
                        <FieldWrapper>
                            <span className = 'field-icon'>
                                <svg
                                    fill = 'none'
                                    height = '20'
                                    viewBox = '0 0 24 24'
                                    width = '20'
                                    xmlns = 'http://www.w3.org/2000/svg'>
                                    <path
                                        d = 'M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                                        stroke = 'currentColor'
                                        strokeLinecap = 'round'
                                        strokeLinejoin = 'round'
                                        strokeWidth = '2' />
                                    <path
                                        d = 'M3 12H21'
                                        stroke = 'currentColor'
                                        strokeLinecap = 'round'
                                        strokeLinejoin = 'round'
                                        strokeWidth = '2' />
                                    <path
                                        d = 'M12 3C14.5013 5.73835 15.9228 9.29203 16 13C15.9228 16.708 14.5013 20.2616 12 23C9.49872 20.2616 8.07725 16.708 8 13C8.07725 9.29203 9.49872 5.73835 12 3Z'
                                        stroke = 'currentColor'
                                        strokeLinecap = 'round'
                                        strokeLinejoin = 'round'
                                        strokeWidth = '2' />
                                </svg>
                            </span>
                            <FieldTextStateless
                                autoFocus = { true }
                                isInvalid = { locationError }
                                isLabelHidden = { true }
                                onChange = { this._onURLChange }
                                placeholder = { this.state.roomPlaceholder }
                                shouldFitContainer = { true }
                                type = 'text'
                                value = { this.state.url } />
                            <Button
                                appearance = 'primary'
                                onClick = { this._onJoin }
                                type = 'button'>
                                {t('go')}
                            </Button>
                        </FieldWrapper>
                    </Form>
                </SpotlightTarget>
            </Header>
        );
    }

    _updateRoomname: () => void;

    /**
     * Triggers the generation of a new room name and initiates an animation of
     * its changing.
     *
     * @protected
     * @returns {void}
     */
    _updateRoomname() {
        const generatedRoomname = generateRoomWithoutSeparator();
        const roomPlaceholder = '';
        const updateTimeoutId = setTimeout(this._updateRoomname, 10000);

        this._clearTimeouts();
        this.setState(
            {
                generatedRoomname,
                roomPlaceholder,
                updateTimeoutId
            },
            () => this._animateRoomnameChanging(generatedRoomname));
    }
}

export default compose(connect(), withTranslation())(Welcome);
