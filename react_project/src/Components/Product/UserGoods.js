import { useParams } from "react-router-dom";
import styled from "styled-components";
import UserCard from "./UserCard";
import EmptyImg from '../../assets/image/no_img.jpg';

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 25px;
    margin-bottom: 20px;
`
const Items = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    gap: 10px;
`

let userCards = [
    {
        title: "제목 6",
        price: "가격 6",
        goodsId: "97",
        imgSrc: EmptyImg,
    },
    {
        title: "제목 7",
        price: "가격 7",
        goodsId: "98",
        imgSrc: EmptyImg,
    },
    {
        title: "제목 8",
        price: "가격 8",
        goodsId: "99",
        imgSrc: EmptyImg,
    },
    {
        title: "제목 9",
        price: "가격 9",
        goodsId: "100",
        imgSrc: EmptyImg,
    }
]

function UserGoods(){
    const {goodsId} = useParams();

    return(
        <Container>
            <Header>
                <b>닉네임님의 판매상품</b>
                <span>모두보기</span>
            </Header>
            <Items>
                {userCards.map(props => 
                    <UserCard key={props.goodsId}
                        {...props}
                    />
                )}
            </Items>
        </Container>    
    )
}

export default UserGoods;