import styled from "styled-components";
import {
    faHome,
    faUser
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectCategoryAtom } from "../../State/atom";
import { createGlobalStyle } from "styled-components";

const Bar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0;
    background-color: white;
    border-top: 1px solid #333;
    justify-content: space-evenly;
    font-size: 30px;
    text-align: center;
    
    p {
        font-size: 14px;
    }
`
const GlobalStyle = createGlobalStyle`
    body {
        padding: 100px 0;
    }
`

function BottomBar(){
    const [categoryFilter, setCategoyFilter] = useRecoilState(selectCategoryAtom);
    const homeClick = () => {
        setCategoyFilter("")
    }

    return(
        <>
            <Bar>
                <div>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} onClick={homeClick} />
                        <p>홈</p>
                    </Link>
                </div>
                <Link to='/mypage'>
                    <FontAwesomeIcon icon={faUser} />
                    <p>나의 당근</p>
                </Link>
            </Bar>
            <GlobalStyle/>
        </>
    )
}

export default BottomBar;