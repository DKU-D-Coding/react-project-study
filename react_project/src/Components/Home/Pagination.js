import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRecoilValue } from "recoil"
import styled from "styled-components"
import { goodsDataAtom } from "../../State/atom"

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
`
const Btn = styled.button`
    font-size: 30px;
    color: gray;
    border: 2px solid gray;
    border-radius: 8px;
    padding: 0 10px;
`
function Pagination(){
    const goodsData = useRecoilValue(goodsDataAtom);
    const previousPageAlert = () => {
        if (goodsData.first)
            alert('첫 페이지입니다')
    }
    const nextPageAlert = () => {
        if (goodsData.first)
            alert('첫 페이지입니다')
        else if (!goodsData.hasNext)
            alert('마지막 페이지입니다')
    }
    return(
        <Container>
            <Btn>
                <FontAwesomeIcon icon={faChevronLeft} onClick={previousPageAlert}/>
            </Btn>
            <Btn>
                <FontAwesomeIcon icon={faChevronRight} onClick={nextPageAlert}/>
            </Btn>
        </Container>
    )
}

export default Pagination