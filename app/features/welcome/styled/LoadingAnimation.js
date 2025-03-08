// @flow

import styled from 'styled-components';
import { colors } from './Theme';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  
  .loading-dots {
    display: flex;
    align-items: center;
  }
  
  .loading-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${colors.lavender};
    margin: 0 4px;
    animation: bounce 1.4s infinite ease-in-out both;
  }
  
  .loading-dot:nth-child(1) {
    animation-delay: -0.32s;
  }
  
  .loading-dot:nth-child(2) {
    animation-delay: -0.16s;
  }
  
  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;
