import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { LoginStateAtom } from "../State/LoginState";
import { useNavigate } from "react-router-dom";
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
        margin-bottom: 15px;
        input {
            display: block;
            width: 100%;
            border-radius: 5px;
            height: 45px;
            padding: 0 10px;
        }
    }
`
const RegisterBtn = styled.input`
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
        .required('*비밀번호를 입력해주세요'),
    name: yup
        .string()
        .required('*이름을 입력해주세요'),      
    phone: yup
        .string()
        .required('*핸드폰번호를 입력해주세요'), 
    nickName: yup
        .string()
        .required('*닉네임을 입력해주세요'), 
}).required();
function SignUp(){
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginStateAtom);
    const [loginError, setLoginError] = useState(false);
    const { register, handleSubmit, formState: { errors }, trigger} = useForm({
        resolver: yupResolver(schema)
    });
    const navigate = useNavigate();
    const onSubmit = () => {
        axios({
            method: 'post',
            url: 'http://103.218.158.186/api/user/signup',
            headers: { 
            'Content-Type': 'application/json'
            },
            data: JSON.stringify(inputState)
        }).then((response) => {
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
    const [inputState, setInputState] = useState({
        email: '',
        pw: '',
        name: '',
        phone: '',
        nickName: ''
    });
    const onInput = (e) => {
        const inputName = e.target.name;
        trigger(inputName);
        setInputState((prevState) => ({
            ...prevState,
            [inputName]: e.target.value
        }));
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Title>안녕하세요!<br/>정보를 입력하고 가입해주세요.</Title>
                    <label>
                        이메일(ID)
                        <input {...register("email")} name="email" type="text" onInput={onInput}/>
                        {(errors.email)?<Error>{errors.email.message}</Error>:""}
                    </label>

                    <label>비밀번호(PW)
                        <input {...register("pw")} name="pw" type="password"  onInput={onInput}/>
                        {(errors.pw)?<Error>{errors.pw.message}</Error>:""}
                    </label>

                    <label>이름
                        <input {...register("name")} name="name" type="text"  onInput={onInput}/>
                        {(errors.name)?<Error>{errors.name.message}</Error>:""}
                    </label>

                    <label>핸드폰번호
                        <input {...register("phone")} name="phone" type="number"  onInput={onInput}/>
                        {(errors.phone)?<Error>{errors.phone.message}</Error>:""}
                    </label>

                    <label>닉네임
                        <input {...register("nickName")} name="nickName" type="text"  onInput={onInput}/>
                        {(errors.nickName)?<Error>{errors.nickName.message}</Error>:""}
                    </label>
                    {
                        loginError?
                            <Alert variant="danger">
                            <Alert.Heading>가입 오류</Alert.Heading>
                            <p>
                                중복된 이메일 계정이 존재합니다
                            </p>
                            </Alert>
                            : ""
                    }
                </div>
                <RegisterBtn type="submit" value="가입하기" />
            </Form>
        </Container>
    )
}

export default SignUp;