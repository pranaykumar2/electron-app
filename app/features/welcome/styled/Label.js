// @flow

import styled from 'styled-components';
import { colors, spacing } from './Theme';

export default styled.label`
    display: block;
    color: ${colors.white};
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: ${spacing.sm};
    font-family: ${props => props.theme?.typography?.fontFamily?.heading || "'Poppins', sans-serif"};
`;
