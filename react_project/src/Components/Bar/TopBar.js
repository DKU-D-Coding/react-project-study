import { faArrowLeft, faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { selectCategoryAtom } from "../../State/atom";

const Bar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    background-color: white;
    border-bottom: 1px solid #333;
    padding: 0 30px;
    box-sizing: border-box;
    justify-content: space-between;
    font-size: 30px;
    z-index: 999;
`
const Title = styled.h2`
    font-weight: bold;
    font-size: 24px;
    margin: 0;
    align-self: center;
    ${ props => 
        props.centeredTitle && 
        css`
            text-align:center; 
            width: 100%; 
            font-size: 1.7rem;
        `
    };
`
const CompleteBtn = styled.button`
    color: #FF931E;
    width: 48px;
    font-weight: bold;
    font-size: 24px;
    padding: 0;
    margin: 0;
`
const LeftSpace = styled.div`
    ${ props => props.hidden && css`display: none;`}
    .homeMargin {
        margin-left: 20px;
    }
`
function TopBar({
        centeredTitle, 
        previousBtn, 
        homeBtn,
        title,
        completeBtn,
        menuBtn
    }){
    const navigate = useNavigate();
    const [categoryFilter, setCategoyFilter] = useRecoilState(selectCategoryAtom);
    const homeClick = () => {
        setCategoyFilter("")
    }
    return(
        <Bar>
            <LeftSpace hidden={!(previousBtn||homeBtn)}>
                {(previousBtn) &&
                    <button onClick={() => {navigate(-1)}}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </button>
                }
                {(homeBtn) &&
                    <Link to="/">
                        <FontAwesomeIcon className={categoryFilter?"":"homeMargin"} icon={faHome} onClick={homeClick}/>
                    </Link>
                } 
            </LeftSpace>
            {(title) &&
                <Title centeredTitle={centeredTitle}>
                    {title}
                </Title>
            }
            {(completeBtn) &&
                <CompleteBtn>
                    완료
                </CompleteBtn>
            }            
            {(menuBtn) &&
                <Link to="/category">
                    <FontAwesomeIcon icon={faBars}/>
                </Link>
            }
        </Bar>
    )
}


export default TopBar;