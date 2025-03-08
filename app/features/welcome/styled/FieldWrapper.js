// @flow

import styled from 'styled-components';
import { colors, spacing, borderRadius, shadows } from './Theme';

export default styled.div`
  display: flex;
  position: relative;
  width: 100%;
  
  .field-icon {
    position: absolute;
    left: ${spacing.md};
    top: 50%;
    transform: translateY(-50%);
    color: ${colors.periwinkle};
    z-index: 2;
  }
  
  input {
    flex: 1;
    background: ${colors.inputBg} !important;
    border: 2px solid rgba(255, 255, 255, 0.3) !important;
    border-radius: ${borderRadius.large} !important;
    color: ${colors.darkGray} !important;
    font-size: 1rem !important;
    padding: ${spacing.md} ${spacing.md} ${spacing.md} ${spacing.xl} !important;
    transition: all 0.3s ease !important;
    box-shadow: ${shadows.small} !important;
    font-family: ${props => props.theme?.typography?.fontFamily?.body || "'Urbanist', sans-serif"} !important;
    height: 50px !important;
    
    &:hover {
      border-color: ${colors.periwinkle} !important;
    }
    
    &:focus {
      background: ${colors.white} !important;
      border-color: ${colors.accent} !important;
      outline: none !important;
    }
    
    &::placeholder {
      color: ${colors.gray} !important;
      opacity: 0.7 !important;
    }
  }
  
  button {
    margin-left: ${spacing.sm} !important;
    background: ${colors.accent} !important;
    color: ${colors.white} !important;
    font-weight: 600 !important;
    border: none !important;
    border-radius: ${borderRadius.large} !important;
    padding: ${spacing.sm} ${spacing.xl} !important;
    transition: all 0.2s ease !important;
    font-family: ${props => props.theme?.typography?.fontFamily?.heading || "'Poppins', sans-serif"} !important;
    min-width: 100px !important;
    height: 50px !important;
    
    &:hover {
      background: ${colors.periwinkle} !important;
      transform: translateY(-2px) !important;
    }
    
    &:active {
      transform: translateY(1px) !important;
    }
  }
`;
