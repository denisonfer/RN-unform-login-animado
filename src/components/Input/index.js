import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { Container, InputText, ViewErro, Span } from './styles';

export function Input({ name, ...rest }) {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  function handleFoco() {
    setIsFocused(true);
  }

  function handleFilled() {
    setIsFocused(false);

    setIsFilled(!!inputRef.current.value);
  }

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container isFocused={isFocused}>
        <InputText
          ref={inputRef}
          keyboardAppearance="dark"
          defaultValue={defaultValue}
          placeholderTextColor="#666360"
          onFocus={handleFoco}
          onBlur={handleFilled}
          onChangeText={(value) => {
            if (inputRef.current) {
              inputRef.current.value = value;
            }
          }}
          {...rest}
        />
      </Container>

      {error && (
        <ViewErro>
          <Span>{error}</Span>
        </ViewErro>
      )}
    </>
  );
}
