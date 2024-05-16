import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilState, useSetRecoilState } from "recoil"
import styled from "styled-components"
import { selectCategoryAtom } from "../State/atom"
import TopBar from "../Components/Bar/TopBar"
import categoryList from "../data/categoryList"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const CategoryList = styled.ul`
    height: 450px;
    display: grid;
    padding: 0 10px;
    grid-template-columns: repeat(3, 1fr);
`
const CategoryItem = styled.li`
    padding: 20px 0;
    text-align: center;
    font-size: 1.1rem;
`
function Category(){
    const [category, setCategoryAtom] = useRecoilState(selectCategoryAtom);
    const navigate = useNavigate()
    const categoryClick = (event) => {
        setCategoryAtom(event.target.id)
        navigate(-1)
    }
    return (
        <Container>
            <TopBar previousBtn title="중고거래 카테고리" centeredTitle />
            <CategoryList>
                {categoryList.map(item => 
                    <CategoryItem 
                        key={item.key} 
                        id={item.categoryName}
                        onClick={categoryClick}
                    >
                            {item.categoryName}
                    </CategoryItem>
                )}
            </CategoryList>
        </Container>
    )
}

export default Category