import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  padding: ${p => p.theme.space[1]}px;
  text-align: center;
`;

export const ButtonFeedback = styled.button`
  width: 100px;
  height: 30px;
  padding: ${p => p.theme.space[1]}px;
  cursor: pointer;

  &:hover {
    transform: scale(1.4);
    transition: transform 0.25s;
    background-color: ${p => p.theme.colors.green};
    border: none;
  }
`;
