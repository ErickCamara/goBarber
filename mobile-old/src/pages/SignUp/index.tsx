import React, { useRef, useCallback} from "react";
import { Image, View, KeyboardAvoidingView, Platform, ScrollView,TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Title, Icon, BackToSignIn, BackToSignInText } from './styles';

import logoImg from '../../assets/logo.png'

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const navigation = useNavigation();

    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);

    const handleSignUp = useCallback((data: object) => {
        console.log(data);
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
                            <Title>Crie sua conta</Title>
                        </View>
                        <Form ref={formRef} onSubmit={handleSignUp}>
                            <Input
                                autoCapitalize="words"
                                name="name"
                                icon="user"
                                placeholder="Nome"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    emailInputRef.current?.focus();
                                }}
                            />
                            <Input
                                ref={emailInputRef}
                                autoCapitalize="none"
                                autoCorrect={false}
                                name="email" 
                                icon="mail" 
                                placeholder="Email" 
                                keyboardType="email-address"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    passwordInputRef.current?.focus();
                                }}
                            />
                            <Input
                                ref={passwordInputRef}
                                secureTextEntry
                                name="password" 
                                icon="lock" 
                                placeholder="Password"
                                textContentType="newPassword"
                                returnKeyType="send"
                                onSubmitEditing={() => {
                                    formRef.current?.submitForm()
                                }}
                            />
                        </Form>
                        
                        <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>

                    </Container>

                    <BackToSignIn onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={20} color="#FFF"/>
                        <BackToSignInText>Voltar para logon</BackToSignInText>
                    </BackToSignIn>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}
export default SignUp;
