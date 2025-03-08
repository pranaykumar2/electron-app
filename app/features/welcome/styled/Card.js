// @flow

import styled from 'styled-components';
import { colors, shadows, spacing, borderRadius } from './Theme';

export default styled.div`
    background: ${colors.cardBg};
    backdrop-filter: blur(12px);
    border-radius: ${borderRadius.large};
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: ${shadows.medium}, 0 8px 16px rgba(0, 0, 0, 0.08);
    padding: ${spacing.xl};
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-6px) scale(1.02);
        box-shadow: ${shadows.large}, 0 15px 30px rgba(0, 0, 0, 0.12);
        border-color: rgba(146, 144, 195, 0.5);
    }

    /* Card hover glow effect */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 200%;
        background: radial-gradient(
                circle at center,
                rgba(255, 255, 255, 0.2) 0%,
                transparent 70%
        );
        transform: scale(0);
        opacity: 0;
        transition: transform 0.6s ease, opacity 0.6s ease;
    }

    &:hover::after {
        transform: scale(1);
        opacity: 1;
    }

    .card-icon {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${colors.lightLavender};
        color: ${colors.periwinkle};
        border-radius: ${borderRadius.medium};
        margin-bottom: ${spacing.md};
        transition: all 0.3s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    }

    &:hover .card-icon {
        transform: scale(1.1);
        color: ${colors.accent};
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    }

    .card-title {
        color: ${colors.darkBlue};
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: ${spacing.sm};
        font-family: ${props => props.theme?.typography?.fontFamily?.heading || "'Poppins', sans-serif"};
        transition: all 0.3s ease;
    }

    .card-subtitle {
        color: ${colors.darkGray};
        font-size: 1rem;
        margin-bottom: ${spacing.lg};
        font-family: ${props => props.theme?.typography?.fontFamily?.body || "'Urbanist', sans-serif"};
        line-height: 1.6;
        transition: all 0.3s ease;
    }

    button {
        background: ${colors.accent};
        color: white;
        border: none;
        font-family: ${props => props.theme?.typography?.fontFamily?.heading || "'Poppins', sans-serif"};
        font-weight: 500;
        padding: ${spacing.sm} ${spacing.lg};
        border-radius: ${borderRadius.medium};
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: ${shadows.small}, 0 4px 6px rgba(0, 0, 0, 0.1);
        position: relative;
        overflow: hidden;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                    to right,
                    transparent,
                    rgba(255, 255, 255, 0.2),
                    transparent
            );
            transform: translateX(-100%);
            transition: transform 0.5s ease;
        }

        &:hover {
            background: ${colors.periwinkle};
            transform: translateY(-2px);
            box-shadow: ${shadows.medium}, ${shadows.glow};
        }

        &:hover::after {
            transform: translateX(100%);
        }

        &:active {
            transform: translateY(1px);
            box-shadow: ${shadows.small};
        }
    }
`;
