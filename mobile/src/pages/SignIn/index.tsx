import React, {useCallback, useRef} from "react";
import { Image, View, KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import getValidationErrors from '../../utils/getValidationErros'

import Input from '../../components/Input'
import Button from '../../components/Button'

import logoImg from '../../assets/logo.png'

import { Container, Title, ForgotPassword, ForgotPasswordText, Icon, CreateAccountButton, CreateAccountButtonText } from './styles';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const passwordInputRef = useRef<TextInput>(null);
    const navigation = useNavigation();

    const handleSignIn = useCallback( async (data: SignInFormData) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string()
                    .required('Email Obrigatório')
                    .email('Digite um email válido'),
                password: Yup.string()
                    .required('Senha Obrigatória')
            });
            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);

                console.log(errors);
                formRef.current?.setErrors(errors);

                return;
            }
            Alert.alert(
                'Erro na autenticação',
                'Ocorreu um erro ao fazer o login, cheque as credenciais'
            )
        }
    }, []);

    return (
        <>
            <KeyboardAvoidingView 
                style={{flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{flex:1}}
                >
                    <Container>
                        <Image source={logoImg}/>
                        
                        <View>
                            <Title>Faça seu logon</Title>
                        </View>

                        <Form ref={formRef} onSubmit={handleSignIn}>
                            <Input
                                autoCorrect={false}
                                autoCapitalize="none"
                                name="email"
                                icon="mail"
                                placeholder="Email"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    passwordInputRef.current?.focus();
                                }}
                            />
                            <Input
                                ref={passwordInputRef}
                                name="password" 
                                icon="lock" 
                                placeholder="Password"
                                secureTextEntry
                                returnKeyType="send"
                                onSubmitEditing={() => {
                                    formRef.current?.submitForm()
                                }}
                            />
                        </Form>

                        <Button 
                                onPress={() => {
                                    formRef.current?.submitForm()
                                }}
                            >
                                Entrar
                        </Button>

                        <ForgotPassword>
                            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                        </ForgotPassword>
                    </Container>

                    <CreateAccountButton 
                        onPress={() => navigation.navigate('SignUp')}>
                        <Icon name="log-in" size={20} color="#ff9000"/>
                        <CreateAccountButtonText>Criar conta</CreateAccountButtonText>
                    </CreateAccountButton>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}
export default SignIn;
