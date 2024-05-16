import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TopBar from "../Components/Bar/TopBar";
import CategoryModal from "../Components/CategoryModal";
import removeBtn from "../assets/image/removeBtn.png"

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #DADADA;
    height: 60px;
    font-size: 20px;
    padding: 0 25px;
    span {
        padding: 15px 0;      
    }
`
const ImgContainer = styled(InputContainer)`
    height: 100px;
    width: 100%;
    display: flex;  
    flex-wrap: wrap;
    overflow-x: scroll;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    align-content: baseline;
    overflow-y: hidden;
    &::-webkit-scrollbar {
        display: none;
    }
`
const RemoveBtn = styled.button`
    font-size: 30px;
    position: relative;
    top: -100px;
    right: -55px;
    img {
        width: 30px;
        height: 30px;
    }
`
const ImgItem = styled.div`
    display: flex;
    flex-direction: column;
    text-align:center;
    width: 80px;
    height: 80px;
    border: 1px solid #A4A4A4;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    overflow: hidden;
    box-shadow: 2px 4px 5px 1px #B6B6B6;
    p {
        font-size: 15px;
        margin: 0;
    }
`
const ImgBox = styled.div`
    height: 80px;
`
const ImgUploadBtn = styled(ImgItem)`
    &:hover, label:hover {
        cursor: pointer;
    }
    span {
        color: #FF0000;
    }
`
const Input = styled.input`
    width: 100%;
    border: 0px;
    padding: 15px 0px;
    height: 55px;
    margin: 0;
    box-sizing: border-box;
    overflow: overflow;
    overflow-wrap: break-word;
    word-break: break-all;
    &:focus {
        outline: 0;
    }
`
const ContentContainer = styled(InputContainer)`
    height: auto;
    border-bottom: 0;
    height: 300px;
    textarea {
        border: 0;
        width: 100%;
        padding: 15px 0;
        resize: none;
        &:focus {
            outline: none;
        }
    }
`
const CategoryBtn = styled.input`
    background-color: transparent;
    border: 0;
`
const Image = styled.img`
    width: 100%;
`
function ProductUpload(){
    const [modalState, setModalState] = useState(false);
    const [cateResult, setCateResult] = useState("");
    const [filesArray, setFilesArray] = useState([]);
    const [urlArray, setUrlArray] = useState([]);
    const categoryClick = () => {
        setModalState(true);
    }
    const changeModalState = (state) => {
        setModalState(state)
    }
    const getCateResult = (result) => {
        setCateResult(result)
    }
    const imageUpload = (e) => {
        const imgArray = Object.values(e.target.files).slice(0,9)
        if (urlArray.length < 10) {
            setFilesArray(imgArray);
            imgArray.map(item => {
                setUrlArray(url => [...url, URL.createObjectURL(item)]);
            })
        }
        else {
            alert('최대 10장까지 첨부 가능합니다')
        }
    }   
    const removeImg = (event) => {
        const selected = urlArray.findIndex((data) => data === event.target.classList[0])
        setUrlArray(prev => prev.filter((_,index) => index !== selected ))
    }
    useEffect(()=>{
        setUrlArray(urlArray.slice(0,10))
    },[filesArray])
    return(
        <>
            <TopBar 
                title="중고거래 글쓰기"
                previousBtn
                completeBtn
            />
            <ImgContainer>
                <ImgUploadBtn>
                    <label htmlFor="upload">
                        <FontAwesomeIcon icon={faCamera}/>
                        <p><span>{urlArray.length<=10?urlArray.length:"10"}</span>/10</p>
                    <input 
                        type="file" 
                        id="upload" 
                        style={{display:"none"}}
                        accept="image/*" required multiple
                        onChange={imageUpload}
                    />
                    </label>
                </ImgUploadBtn>
                {urlArray.map((item) =>
                    <ImgBox key={item}>
                        <ImgItem>
                            <Image src={`${item}`}/>
                        </ImgItem>
                        <RemoveBtn>
                            <img onClick={removeImg} src={removeBtn} className={item}/>
                        </RemoveBtn>
                    </ImgBox>
                )}
            </ImgContainer> 
            <InputContainer>
                <Input placeholder="제목" type="text"/>
            </InputContainer>
            <InputContainer>
                <span>{cateResult||"카테고리"}</span>
                <CategoryBtn type="button" value="v" onClick={categoryClick}/>
            </InputContainer>        
            <InputContainer>
                <Input placeholder="가격(원)" type="number"/>
            </InputContainer>
            <ContentContainer>
                <textarea
                    placeholder="게시글 내용을 작성해주세요. 가짜 품목 및 판매금지품목은 게시가 제한됩니다."
                />
            </ContentContainer>
            <CategoryModal 
                visibility={modalState} 
                changeModalState={changeModalState} 
                getCateResult={getCateResult}
            />
        </>
    )
}

export default ProductUpload;