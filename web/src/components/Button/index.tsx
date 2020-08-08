import React, {ButtonHTMLAttributes} from 'react';

import {Container} from './styles'
// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {} 
// Quando uma interface é vazia, ou seja não é criada ou sobrescrita nenhuma propriedade do HTMLAributes
// É possivel alterar o inteface para um type, que é a forma de criar a tipagem de um objeto wue é composta
// De outras tipagens

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;


const Button: React.FC<ButtonProps> = ({children, ...rest}) => {
    return(
        <Container type="button" {...rest}>
            {children}
        </Container>
    )
}
export default Button;
