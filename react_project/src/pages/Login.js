import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginStateAtom } from "../State/LoginState";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Alert from 'react-bootstrap/Alert';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 20px;
    max-width: 800px;
    margin: 0 auto;
`
const Title = styled.h1`
    font-weight: bold;
    font-size: 25px;
    line-height: 150%;
    margin-bottom: 30px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 200px);
    justify-content: space-between;
    label {
        width: 100%;
        font-size: 20px;
        margin-bottom: 20px;
        input {
            display: block;
            width: 100%;
            border-radius: 5px;
            height: 45px;
            padding: 0 10px;
        }
    }
`
const LoginBtn = styled.input`
    background-color: #FF931E;
    height: 50px;
    border: 0;
    border-radius: 10px;
    color: white;
    font-size: 25px;
    margin-top: 30px;
`
const Error = styled.p`
    color: #f05f4d;
`
const schema = yup.object().shape({
    email: yup
        .string()
        .required('*이메일을 입력해주세요')
        .matches(
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            '*이메일 형식을 확인해주세요'
        ),
    pw: yup
        .string()
        .required('*비밀번호를 입력해주세요')
}).required();
function Login(){
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(false)
    const { register, handleSubmit, formState: { errors }, trigger} = useForm({
        resolver: yupResolver(schema)
    });
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        pw: ""
    })
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginStateAtom);
    const onSubmit = (e) => {
        axios({
            method: 'post',
            url: 'http://103.218.158.186/api/user/login',
            headers: { 
            'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                email: loginInfo.email,
                pw: loginInfo.pw,
            })
        }).then((response) => {
            console.log(response.data);
            setIsLoggedIn((prevState) => ({
                ...prevState,
                state: true,
                accessToken: response.data.data.accessToken,
                refreshToken: response.data.data.refreshToken,
                nickName: response.data.data.nickName,
                userId: response.data.data.userId,
            }));
            navigate('/');
        })
        .catch((error) => {
          console.log(error);
          setLoginError(true)
        }); 
    }
    const onInput = (e) => {
        const inputName = e.target.name
        switch(inputName) {
            case 'email': 
                trigger('email')
                break
            case 'pw' : 
                trigger('pw')
                break
        }
        setLoginInfo((prevState)=>({
            ...prevState,
            [inputName] : e.target.value,
        }))
    }
    return(
    <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Title>
                    안녕하세요!<br/>
                    이메일로 로그인해주세요.
                </Title>
                <label>이메일(ID)
                    <input {...register("email")} name="email" type="text" onInput={onInput}/>
                    {(errors.email)?<Error>{errors.email.message}</Error>:""}
                </label>
                <label>비밀번호(PW)
                    <input {...register("pw")} name="pw" type="password" onInput={onInput}/>
                    {(errors.pw)?<Error>{errors.pw.message}</Error>:""}
                </label>
                {
                    loginError?
                        <Alert variant="danger">
                        <Alert.Heading>로그인 오류</Alert.Heading>
                        <p>
                            이메일 또는 비밀번호를 다시 확인해주세요
                        </p>
                        </Alert>
                        : ""
                }
            </div>
            <LoginBtn type="submit" value="로그인" />
        </Form>
     </Container>
    )
}

export default Login