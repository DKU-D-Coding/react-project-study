import { Link } from "react-router-dom";
import styled from "styled-components";
const Card = styled.div`
    img {
        margin-bottom: 10px;
        width: 100%;
    }
    p {
        padding-left: 20px;
        margin: 0;
    }
`

function UserCard({ goodsId, imgSrc, title, price }){
    return(
        <li>
            <Link to={'/product/' + goodsId}>
                <Card>
                    <img src={imgSrc}/>
                    <p>{title}</p>
                    <p>{price}</p>
                </Card>
            </Link>
        </li>
    )
}

export default UserCard;