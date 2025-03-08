// @flow

import styled from 'styled-components';
import { colors, spacing } from './Theme';

export default styled.h2`
    color: ${colors.white};
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: ${spacing.lg};
    position: relative;
    display: inline-block;
    font-family: ${props => props.theme?.typography?.fontFamily?.heading || '\'Poppins\', sans-serif'};

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 212px;
        height: 3px;
        background: ${colors.lavender};
        border-radius: 2px;
    }
`;
