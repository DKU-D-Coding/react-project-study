import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components"

const CardBox = styled.div`
    display: flex;
    height: 200px;
    width: 100%;
    align-items: center;
    border-bottom: 1px black solid;

    a {
        display: flex;
        height: 200px;
        gap: 10px;
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
        align-items: center;
    }

    img {
        width: 120px;
        height: 120px;
        border: 1px solid black;
    }
`
const CardDetail = styled.div`
    display: flex;
    width: 100%;
    max-width: calc(100% - 120px);
    padding-left: 15px;
    flex-direction: column;
    justify-content: center;

`
const CardTopDetail = styled.div`
    display: flex;
    flex-direction: column;


`
const Title = styled.b`
    font-size: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`
const Category = styled.span`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`
const Price = styled.p`
    margin: 0;
`
const Like = styled.p`
    text-align: right;
    font-size: 25px;
`
function Card({ itemId, url, title, price, likeCount, categoryName }) {
    return (
            <CardBox>
                <Link to={'/product/' + itemId}>
                    <img src={url} alt="Goods Thumbnail"/>
                    <CardDetail>
                        <CardTopDetail>
                            <Title>{title}</Title>
                            <Category>{categoryName}</Category>
                            <Price>{price}원</Price>
                        </CardTopDetail>
                        <Like><FontAwesomeIcon icon={faHeart}/> {likeCount}</Like>
                    </CardDetail>
                </Link>
            </CardBox>
    )
}

export default Card;