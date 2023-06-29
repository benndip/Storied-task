import React, { InputHTMLAttributes, useState } from "react";

import { styled } from "styled-components";
import { BsEye } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  leftIcon: React.ReactNode;
  rightIcon?: React.ReactNode;
  passwordInput?: boolean;
  errorText?: string;
}

const Container = styled.div`
  width: 80%;
  height: 55px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: #f4f7f9;
  padding-right: 12px;
  border-radius: 5px;
`;

const LeftIconComponent = styled.div`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #ffffff;
  margin-left: 10px;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 80%;
  height: 80%;
  margin-right: 5px;
  margin-left: 5px;
  border: none;
  outline: none;
  background-color: transparent;
`;

const ErrorText = styled.div`
    font-size: 14px;
    color: #ee5253;
    align-self: flex-start;
`
const ErrorContainer = styled.div`
    width: 80%;
    display: flex;
`

const CustomInput: React.FC<IProps> = ({
  type,
  leftIcon,
  rightIcon,
  passwordInput,
  errorText='',
  ...rest
}) => {
  const [secured, setSetsecured] = useState(true);

  return (
    <>
      <Container>
        <LeftIconComponent>{leftIcon}</LeftIconComponent>
        <Input
          type={passwordInput && secured ? "password" : "text"}
          {...rest}
        />
        {passwordInput && (
          <>
            {secured ? (
              <BsEye onClick={() => setSetsecured(false)} color="" />
            ) : (
              <BsEyeSlashFill onClick={() => setSetsecured(true)} />
            )}
          </>
        )}
        {rightIcon}
      </Container>
      {
        errorText!.length > 0
        &&
        <ErrorContainer>
            <ErrorText>{errorText}</ErrorText>
        </ErrorContainer>
      }
    </>
  );
};

export default CustomInput;
