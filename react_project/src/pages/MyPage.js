import { faUserCircle, faHeart, faFileLines } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil"
import styled from "styled-components"
import TopBar from "../Components/Bar/TopBar"
import BottomBar from "../Components/Home/BottomBar"
import { LoginStateAtom } from "../State/LoginState"

const Container = styled.div`
    padding: 0 20px;
`
const NickNameContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 40px;
    margin: 20px 0 80px 0;
    svg { 
        font-size: 50px;
        margin-right: 20px;
    }
    button {
        display: flex;
        align-items: baseline;
        font-size: 17px;
        color: #A7A7A7;
    }
`
const LinkContainer = styled.div`
    height: 100px;
    a {
        display: flex;
        align-items: center;
    }
    span {
        font-size: 30px;
        line-height: 50px;
    }
    svg {
        width: 60px;
        font-size: 50px;
        margin-right: 30px; 
    }
`

function MyPage(){
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginStateAtom)
    const { nickName } = useRecoilValue(LoginStateAtom)
    const logoutHandler = () => {
        setIsLoggedIn(false)
        navigate('/')
    }
    return(
        <>
            <TopBar title="나의 당근" menuBtn/>
            <Container>
                <NickNameContainer>
                    <span>
                        <FontAwesomeIcon icon={faUserCircle}/>
                        {nickName}
                    </span>
                    <button onClick={logoutHandler}>
                        <span>로그아웃</span>
                    </button>
                </NickNameContainer>
                <LinkContainer>
                    <Link to="/history">
                        <FontAwesomeIcon icon={faFileLines}/>
                        <span>
                            판매내역
                        </span>
                    </Link>
                </LinkContainer>
                <LinkContainer>
                    <Link to="/likes">
                        <FontAwesomeIcon icon={faHeart}/>
                        <span>
                            관심목록
                        </span>
                    </Link>
                </LinkContainer>
            </Container>
            <BottomBar/>
        </>
    )
}

export default MyPage