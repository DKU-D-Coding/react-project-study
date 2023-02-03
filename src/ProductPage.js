import React from 'react';
import { useParams } from 'react-router';
import { getItemBySlug } from './api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faHouse, faLeftLong, faHeart } from '@fortawesome/free-solid-svg-icons';
import './ProductPage.css';
import UserProduct from './UserProduct';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './util/Carousel';

function ProductPage() {
  const { itemSlug } = useParams();
  const [itemObject, setItemObject] = useState({});
  const getListFromApi = async itemSlug => {
    const item = await getItemBySlug(itemSlug);
    setItemObject({ ...itemObject, ...item });
  };
  useEffect(() => {
    getListFromApi(itemSlug);
  }, []);
  return (
    <>
      <div className='productPageContainer'>
        <div className='productNav'>
          <Link to='/'>
            <FontAwesomeIcon icon={faLeftLong} className='backIcon' />
          </Link>
          <Link to='/'>
            <FontAwesomeIcon icon={faHouse} className='homeIcon' />
          </Link>
        </div>

        {/* <div className='imageLayer'>
        <div className='imageContainer'>
          <img src={itemObject.imageUrl[0]} alt={itemObject.title} className='productImage'></img>
        </div>
      </div> */}
        <Carousel imageList={itemObject.imageUrl}></Carousel>
        <div className='userLayer'>
          <div className='userContainer'>
            <FontAwesomeIcon icon={faCircleUser} className='userIcon' />
            <p className='ptag'>{itemObject.nickName}</p>
          </div>
          <div>
            <p className='ptag'>{itemObject.title}</p>
            <p className='ptag'>{itemObject.content}</p>
          </div>
        </div>
        <div className='sellingLayer'>
          <div className='sellingContainer'>
            <p className='ptag'>{itemObject.nickName}님의 판매 상품</p>
            <p>모두 보기</p>
          </div>

          <div>
            <UserProduct nickName={itemObject.nickName}></UserProduct>
          </div>
        </div>
        <div className='footLayer'>
          <FontAwesomeIcon icon={faHeart} className='heartIcon' />
          <p className='ptag'>{itemObject.price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
