// @flow

import styled from 'styled-components';
import { colors, shadows, spacing } from './Theme';

export default styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: ${spacing.md} ${spacing.md} ${spacing.xl};
    width: 100%;
    max-width: 1200px;

    @media (min-width: 768px) {
        padding: ${spacing.xl} ${spacing.md} ${spacing.xl};
    }

    .logo-container {
        margin-bottom: ${spacing.lg};
    }

    .logo {
        height: 80px;
        width: auto;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
    }

    .welcome-heading {
        margin-top: 24px;
        color: ${colors.white};
        margin-bottom: ${spacing.sm};
        font-size: 2.5rem;
        font-weight: 700;
        font-family: ${props => props.theme?.typography?.fontFamily?.heading || '\'Poppins\', sans-serif'};
        text-align: center;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    }

    .welcome-subheading {
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: ${spacing.xl};
        font-size: 1.25rem;
        font-family: ${props => props.theme?.typography?.fontFamily?.body || '\'Urbanist\', sans-serif'};
        text-align: center;
        max-width: 650px;
        font-weight: 400;
    }

    .created-by {
        position: absolute;
        bottom: -10px;
        right: 0;
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.7);
        font-family: ${props => props.theme?.typography?.fontFamily?.body || '\'Urbanist\', sans-serif'};
        display: flex;
        align-items: center;
        gap: ${spacing.md};

        .date-time {
            background: rgba(255, 255, 255, 0.1);
            padding: ${spacing.xxs} ${spacing.sm};
            border-radius: ${spacing.xs};
        }
    }
`;
