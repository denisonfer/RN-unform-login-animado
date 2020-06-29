import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  border-width: 2px;
  border-color: #999;
  width: 100%;
  margin-bottom: 20px;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #c169ff;
    `}
`;

export const InputText = styled.TextInput`
  font-size: 16px;
  font-weight: bold;
  color: #222;
`;

export const ViewErro = styled.View`
  width: 100%;
  margin-top: -20px;
  margin-bottom: 20px;
`;

export const Span = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: red;
`;
