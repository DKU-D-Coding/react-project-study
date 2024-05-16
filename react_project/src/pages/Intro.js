import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from '../assets/image/logo.jpg'

const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding-bottom: 50px;
`
const Top = styled.div`
    display: flex;
    height: 80vh;
    flex-direction: column;
    justify-content: center;
`
const Bottom = styled.div`
`
const Logo = styled.img`
    width: 160px;
    height: 160px;
    align-self: center;
    margin-bottom: 25px;
`
const Title = styled.h1`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 15px;
`
const Desc = styled.p`
    font-size: 18px;
`

const StartBtn = styled.button`
    background-color: #FF931E;
    color: white;
    font-size: 30px;
    width: calc(100vw - 40px );
    max-width: 400px;
    padding: 5px 0;
`
const IsLoginContainer = styled.div`
    margin-top: 20px;

    a {
        color: #FF931E;
        font-weight: bold;
        margin-left: 5px;
    }
`
function Intro(){
    return(
        <Container>
            <Top>
                <Logo src={logo}/>
                <Title>당신 근처의 Karrot 마켓</Title>
                <Desc>
                    중고 거래부터 동네 정보까지,<br/>
                    지금 내 동네를 선택하고 시작해보세요!
                </Desc>
            </Top>
            <Bottom>
                <Link to="/signup">
                    <StartBtn>시작하기</StartBtn>
                </Link>
                <IsLoginContainer>
                    <span>
                        이미 계정이 있나요?
                    </span>
                    <Link to="/login">
                        로그인
                    </Link>
                </IsLoginContainer>
            </Bottom>
        </Container>
    )
}

export default Intro