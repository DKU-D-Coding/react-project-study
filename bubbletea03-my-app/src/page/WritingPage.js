import styled from 'styled-components';
import CategoryModal from '../component/writing-page/CategoryModal';
import Header from '../component/writing-page/Header';




export default function WritingPage() {
    return ( // TODO: html 전부 완성되면, 컴포넌트화 시키기
        <StyledBlock>
            <Header/>
            <CategoryModal/>
            <div className='photo-upload'>
                <div>ㅇㅇ</div>
                <div>ㅇㅇ</div>
                <div>ㅇㅇ</div>
            </div>
            <div className='title'>
                <input type="text" placeholder="제목"/>
            </div>
            <div className='category'>
                <h3>카테고리</h3>
                <button><h3>▼</h3></button>
            </div>
            <div className='price'>
                <input type="text" placeholder="가격(원)"/>
            </div>
            <div className='content'>
                <textarea placeholder="게시글 내용을 작성해주세요. 가짜 품목 및 판매금지품목은 게시가 제한됩니다."/>
            </div>
        </StyledBlock>
    );
}

const StyledBlock = styled.div`
    .photo-upload {
        display: flex;
        border-bottom: 1px solid gray;
        * {
            padding: 25px;
        }
    }

    .title, .price {
        height: 70px;
        border-bottom: 1px solid gray;
        input {
            padding-left: 15px;
            width: 100%;
            height: 100%;
            font-size: 20px;
        }
    }

    .category {
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid gray;
        * {
            padding: 0px 20px;
        }
    }

    .content {
        width: 100%;
        height: 200px;
        textarea {
            width: 100%;
            height: 100%;
            padding: 20px;
            overflow-wrap: anywhere;
        }
    }
`