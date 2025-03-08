// @flow

import styled from 'styled-components';
import { colors, shadows, spacing, borderRadius } from './Theme';

export default styled.form`
    width: 100%;
    max-width: 700px;
    margin: ${spacing.md} auto;
    padding: ${spacing.lg} ${spacing.xl};
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: ${borderRadius.large};
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: ${shadows.medium};
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-3px);
    }
`;
