import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import TopBar from '../Components/Bar/TopBar';
import ProductBottomBar from '../Components/Product/ProductBottomBar';
import styled from 'styled-components';
import UserGoods from '../Components/Product/UserGoods';
import EmptyImg from '../assets/image/no_img.jpg';

const Container = styled.div`

`
const ProductDetail = styled.div`
  padding: 20px;
  font-size: 20px;
`
const UserContainer = styled.div`
  display: flex;
  gap: 20px;
  line-height: 45px;
  font-size: 25px;
  svg {
     font-size: 45px;
  }
`
const carouselItems = [
  EmptyImg,
  EmptyImg,
  EmptyImg
]

function Product() {
    return(
        <Container>
          <TopBar
            previousBtn
            homeBtn
          />
          <Carousel>
            {carouselItems.map( (item,index) => 
              <CarouselItem key={index}>
                <img src={item}/>
              </CarouselItem>  
            )}
          </Carousel>
          <ProductDetail>
            <UserContainer>
              <FontAwesomeIcon icon={faUserCircle} />
              <span>닉네임</span>
            </UserContainer>
            <hr/>
            <div>
              <b>제목</b>
              <p>
                <span>카테고리</span>&nbsp;
                <span>게시시간</span>
              </p>
              <b>본문</b>
              <p>
                -<br/>
                -<br/>
                -<br/>
              </p>
              <button>관심</button>
            </div>
            <hr/>
          </ProductDetail>
          <UserGoods/>
          <ProductBottomBar/>
        </Container>
    )
}

export default Product;