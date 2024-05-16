import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import categoryList from "../data/categoryList";

const Background = styled.div `
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(196, 196, 196, 0.8);
    z-index: 1000;
`
const Modal = styled.ul`
    width: 300px;
    max-height: 80vh;
    overflow-y: scroll;
    background-color: white;
    list-style: none;
    box-sizing: border-box;
    padding: 30px 50px;
    position: absolute;
    z-index: 1001;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const List = styled.li`
    margin-bottom: 20px;
    &:hover {
        cursor: pointer;
    }
`
function CategoryModal(props){
    const [clickedCate, setClickedCate] = useState()
    const cancleModal = () => {
        props.changeModalState(false)
    }
    const selectCategory = (e) => {
        setClickedCate(e.target.innerHTML)
        cancleModal();
    }
    useEffect(()=>{
        props.getCateResult(clickedCate)
    },[selectCategory])
    return(
        <>
            { props.visibility &&
                <>
                <Background onClick={cancleModal}/> 
                <Modal>
                    {categoryList.map((item) =>
                        <List 
                            key={item.key} 
                            onClick={selectCategory}
                        >
                            {item.categoryName}
                        </List>
                    )}
                </Modal> 
                </>
            }
        </>
    )
}

export default CategoryModal;