// @flow

import styled from 'styled-components';
import { colors } from './Theme';

export default styled.div`
    background: linear-gradient(135deg, ${colors.darkBlue} 0%, ${colors.navy} 70%, ${colors.periwinkle} 120%);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    font-family: ${props => props.theme?.typography?.fontFamily?.body || "'Urbanist', sans-serif"};
`;
