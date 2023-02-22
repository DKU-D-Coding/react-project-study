import styled from 'styled-components';
import * as shortid from 'shortid';


export default function PhotoUpload({ files, setFiles }) {
    const uploadImages = function (e : React.ChangeEvent<HTMLInputElement>) {
        Object.values(e.target.files).forEach(file => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => { setFiles([...files, reader.result]) };
        });
        console.log("파일 경로: " + e.target.value);
        e.target.value = ''; // onChange에서 항상 작동해야 하기 때문에, value를 초기화한다.
    }

    const deleteImg = function (targetIndex) {
        setFiles(files.filter((_, idx) => (idx !== targetIndex)))
    }

    return (
        <Container>
            <Label>
                <Img alt="카메라" src='/icon/camera.png' />
                <input type="file" accept="image/*" onChange={uploadImages} multiple />
            </Label>
            {
                files.map((url, idx) =>
                    <div key={shortid.generate()}>
                        <Img alt="업로드한 이미지" src={url} />
                        <DeleteBtn onClick={() => { deleteImg(idx) }}>
                            <img alt="닫기 버튼" src="/icon/close.png" />
                        </DeleteBtn>
                    </div>
                )
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 100px;

    flex-wrap: wrap; // column + wrap 특성을 이용하여 가로축 쌓임 구현
    justify-content: center;
    flex-direction: column;
    align-content: flex-start;
    
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid gray;

    > * {
        margin: 10px;
    }
`

const Label = styled.label`
    cursor: pointer;
    input {
        display: none;
    }
`

const Img = styled.img`
    width: 70px;
    height: 70px;
    border: 2px solid gray;
    box-shadow: 3px 3px 10px -2px black;
    background-color: lightgray;
`

const DeleteBtn = styled.button`
    width: 0;
    height: 0;
    position: relative;
    bottom: 70%;
    right: 25%;
    img {
        width: 30px;
        height: 30px;
    }
`