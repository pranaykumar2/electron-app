// @flow

import styled from 'styled-components';
import { colors, shadows, spacing, borderRadius } from './Theme';

export default styled.div`
  background: ${colors.cardBg};
  border-radius: ${borderRadius.medium};
  border-left: 4px solid ${colors.accent};
  box-shadow: ${shadows.medium};
  padding: ${spacing.md};
  margin-bottom: ${spacing.sm};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  
  &:hover {
    transform: translateX(4px);
    box-shadow: ${shadows.large};
    border-left-width: 8px;
  }
  
  .meeting-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.lightLavender};
    color: ${colors.periwinkle};
    border-radius: ${borderRadius.medium};
    margin-right: ${spacing.md};
    flex-shrink: 0;
  }
  
  .meeting-details {
    flex: 1;
    overflow: hidden;
  }
  
  .meeting-name {
    color: ${colors.darkBlue};
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: ${spacing.xxs};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: ${props => props.theme?.typography?.fontFamily?.heading || "'Poppins', sans-serif"};
  }
  
  .meeting-date {
    color: ${colors.gray};
    font-size: 0.9rem;
    font-family: ${props => props.theme?.typography?.fontFamily?.body || "'Urbanist', sans-serif"};
  }
  
  .meeting-actions {
    display: flex;
    gap: ${spacing.sm};
  }
  
  .action-button {
    background: transparent;
    color: ${colors.periwinkle};
    border: 1px solid ${colors.periwinkle};
    border-radius: ${borderRadius.medium};
    padding: ${spacing.xs} ${spacing.sm};
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: ${props => props.theme?.typography?.fontFamily?.heading || "'Poppins', sans-serif"};
    
    &:hover {
      background: ${colors.periwinkle};
      color: white;
    }
    
    &.primary {
      background: ${colors.accent};
      color: white;
      border-color: ${colors.accent};
      
      &:hover {
        background: ${colors.periwinkle};
        border-color: ${colors.periwinkle};
      }
    }
  }
`;
