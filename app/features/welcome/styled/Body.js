// @flow

import styled from 'styled-components';
import { colors, shadows, spacing, borderRadius } from './Theme';

export default styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
  margin: 0 auto;
  padding: ${spacing.md} ${spacing.xl};
  width: 100%;
  max-width: 920px;

  /* Enhanced scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${borderRadius.small};
      
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.periwinkle};
    border-radius: ${borderRadius.small};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.lavender};
  }

  .recent-meetings-container {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: ${borderRadius.large};
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: ${spacing.lg};
    box-shadow: ${shadows.medium};
    overflow-y: auto;
      height: 294px;
      scrollbar-width: none;
      scroll-behavior: smooth;
  }
`;
