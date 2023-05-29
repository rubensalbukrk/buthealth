import React from 'react'
import styled from 'styled-components/native'


export const InputArea = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 70%;
    opacity: 0.4;
    height: 51px;
    border-radius: 50px;
    background-color: #fff;
    margin-bottom: 30px;
`
export const Label = styled.Text`
    font-size: 26px;
    color: #8A84E2;
    
`

export default function Field(){
    return (
        <>
            <InputArea>
                
                
            </InputArea>
        </>
    )
}