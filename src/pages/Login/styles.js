import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Form as Unform } from '@unform/mobile';

import { Input as MyInput } from '~/components/Input';
import { normalize } from '~/util';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ViewLogo = styled(Animated.View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const Text = styled.Text`
  font-size: ${normalize(28)}px;
  color: #222;
  font-weight: bold;
  margin-left: 10px;
`;

export const AnimatedView = styled(Animated.View)`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const ViewForm = styled(Unform)`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const Input = styled(MyInput)``;

export const ButtonSubmit = styled(RectButton)`
  background: #c169ff;
  padding: 10px 15px;
  width: 100%;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
