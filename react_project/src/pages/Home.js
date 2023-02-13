import UploadBtn from "../Components/Home/UploadBtn";
import BottomBar from "../Components/Home/BottomBar";
import Card from "../Components/Home/Card";
import TopBar from "../Components/Bar/TopBar";
import { selectCategoryAtom } from "../State/atom";
import { useRecoilValue } from "recoil";
import cards from "../data/goods";
import { LoginStateAtom, LoginTokenAtom } from "../State/LoginState";

function Home(){
    const categoryFilter = useRecoilValue(selectCategoryAtom);
    let filteredResult = []
    const isLoggedin = useRecoilValue(LoginStateAtom)
    if (categoryFilter) {
        cards.forEach( (currentItem) => {
            return(
                currentItem.categoryName === categoryFilter ? filteredResult.push(currentItem) : null
            )
        })
    }
    return(
        <>  
            <TopBar
                title={
                    (categoryFilter)? 
                    categoryFilter
                    : "홈"
                }
                homeBtn={
                    (categoryFilter)? 
                    true
                    : false
                }
                menuBtn={true}
            />
            <UploadBtn />
            {categoryFilter?
                filteredResult.map(props => <Card key = {props.goodsId} {...props}/>)
                :
                cards.map(props => <Card key = {props.goodsId} {...props}/>)
            }
            <BottomBar />
        </>
    )
}

export default Home;