import axios from "axios";
import UploadBtn from "../Components/Home/UploadBtn";
import BottomBar from "../Components/Home/BottomBar";
import Card from "../Components/Home/Card";
import TopBar from "../Components/Bar/TopBar";
import { goodsDataAtom, selectCategoryAtom } from "../State/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import cards from "../data/goods";
import { LoginStateAtom, LoginTokenAtom } from "../State/LoginState";
import { useEffect, useState } from "react";
import Pagination from "../Components/Home/Pagination";

function Home() {
  const categoryFilter = useRecoilValue(selectCategoryAtom);
  const [filteredResult, setFilteredResult] = useState([]);
  const isLoggedIn = useRecoilValue(LoginStateAtom);
  const [goodsList, setGoodsList] = useState([]);
  const [goodsData, setGoodsData] = useRecoilState(goodsDataAtom);
  useEffect(() => {
    axios({
      method: "get",
      url: "/api/item",
      headers: {
        Authorization: `Bearer ${isLoggedIn.accessToken}`,
      },
    }).then((response) => {
      setGoodsList(response.data.data.content);
      setGoodsData(response.data.data);
    });
  }, []);
  useEffect(() => {
    if (categoryFilter) {
      setFilteredResult(
        cards.filter(
          (currentItem) => currentItem.categoryName === categoryFilter
        )
      );
    }
  }, [categoryFilter]);

  return (
    <>
      <TopBar
        title={categoryFilter || "홈"}
        homeBtn={!!categoryFilter}
        menuBtn
      />
      <UploadBtn />
      {categoryFilter
        ? filteredResult.map((props) => <Card key={props.itemId} {...props} />)
        : goodsList.map((props) => <Card key={props.itemId} {...props} />)}
      <Pagination />
      <BottomBar />
    </>
  );
}

export default Home;
