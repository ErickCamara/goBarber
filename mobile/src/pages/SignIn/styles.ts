import styled from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px ${Platform.OS === 'android' ? 100 : 40}px;

`;
export const Title = styled.Text`
    font-size: 24px;
    color: #f4ede8;
    font-family: 'RobotoSlab-Medium';
    margin: 64px 0 24px;
`;
export const ForgotPassword = styled.TouchableOpacity`
    margin-top: 24px;
`;
export const ForgotPasswordText = styled.Text`
    color: #f4ede8;
    font-size: 16px;
    font-family: 'RobotoSlab-Regular';

`;
export const CreateAccountButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: #312e38;
    border-top-width: 1px;
    padding: 16px 0 ${16 + getBottomSpace()}px;

    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
export const CreateAccountButtonText = styled.Text`
    color: #ff9000;
    font-size: 16px;
    font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
    margin-right: 16px;
`;
