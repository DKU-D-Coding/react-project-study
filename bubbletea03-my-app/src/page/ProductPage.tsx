import { useParams, useNavigate } from 'react-router-dom';
import UserContent from '../component/product-page/UserContent';
import UserItemList from '../component/product-page/UserItemList';
import styled from 'styled-components';
import BottomNav from '../component/product-page/BottomNav';
import TopNav from '../component/TopNav';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { itemData } from '../RecoilStates';
import { useState, useEffect } from 'react';

export default function ProductPage() {
    const navigate = useNavigate();
    const params = useParams();
    const items = useRecoilValue(itemData);
    const [targetItem, setTargetItem] = useState({});

    // ! useEffect 안에서의 state 업데이트 기준(?)이 약간 이상한 것 같다
    // ! DataManager에서 itemData를 변경하면 여기에 바로 적용이 돼야되는 거 아닌가
    useEffect(() => {
        console.log(items);
        let [idMatchedItem] = items.filter((item) => item.itemId == params.itemId);
        console.log(idMatchedItem);
        setTargetItem(idMatchedItem);
    }, [items]);

    window.scrollTo(0, 0);
    return (<>
        <TopNav left={<>
            <button onClick={() => { navigate(-1) }}>
                <img alt="왼쪽 화살표" src="/icon/arrow.png" />
            </button>
            <Link to="/">
                <img alt="홈 아이콘" src="/icon/home.png" />
            </Link>
        </>} />
        <TopImage>
            <img alt="대표 이미지" src="https://media.istockphoto.com/id/1352173787/photo/sunset.jpg?b=1&s=170667a&w=0&k=20&c=jKDMxKXALm540OTFB3vMIDFYwOEedauorSpvLgjkU1M=" />
        </TopImage>
        <UserContent item={targetItem} />
        {/* <UserItemList userName={targetItem.sellerName} /> */}
        <BottomNav />
    </>);
}

const TopImage = styled.div`
    width: 100%;
`