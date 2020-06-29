import React, { useRef, useState, useEffect } from 'react';
import { Animated, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import * as Yup from 'yup';

import {
  Container,
  ViewLogo,
  Text,
  AnimatedView,
  ViewForm,
  Input,
  ButtonSubmit,
  TextButton,
} from './styles';

console.disableYellowBox = true;

export default function Login() {
  const formRef = useRef(null);

  const [offsetForm] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [offsetLogo] = useState(new Animated.ValueXY({ x: 100, y: 0 }));
  const [opacity] = useState(new Animated.Value(0));

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um E-mail válido!')
          .required('E-mail obrigatório!'),
        senha: Yup.string()
          .min(6, 'No mínimo 6 digitos')
          .required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.tron.log('HandleSubmit', data);
      formRef.current.setErrors({});

      reset();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const messageError = {};

        error.inner.forEach((err) => {
          messageError[err.path] = err.message;
        });

        formRef.current.setErrors(messageError);
      }
    }
  }

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offsetForm.y, {
        toValue: 0,
        speed: 40,
      }),
      Animated.spring(offsetLogo.x, {
        toValue: 0,
        speed: 1,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
      }),
    ]).start();
  }, []);

  return (
    <Container>
      <ViewLogo
        style={{ transform: [{ translateX: offsetLogo.x }] }}
        useNativeDriver={true}
      >
        <Icon
          name={Platform.OS === 'ios' ? 'logo-apple' : 'logo-android'}
          type="ionicon"
          size={26}
          color="#222"
        />
        <Text>UnformApp</Text>
      </ViewLogo>

      <AnimatedView
        style={{ opacity: opacity, transform: [{ translateY: offsetForm.y }] }}
        useNativeDriver={true}
      >
        <ViewForm ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="Digite seu E-mail" />
          <Input name="senha" placeholder="Digite sua senha" />

          <ButtonSubmit onPress={() => formRef.current.submitForm()}>
            <TextButton>Acessar</TextButton>
          </ButtonSubmit>
        </ViewForm>
      </AnimatedView>
    </Container>
  );
}
