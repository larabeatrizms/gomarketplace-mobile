import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px 5px;

  background-color: ${props => props.theme.colors.background};
  /* background-color: #fff */
`;
