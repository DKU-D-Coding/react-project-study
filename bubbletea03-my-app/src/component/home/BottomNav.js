import styled from "styled-components";

export default function BottomNav() {
    return (
        <Container>
            <button>
                <img alt="홈 아이콘" src="/icon/home.png"/>
                <h2>홈</h2>
            </button>
            <button>
                <img alt="사람 아이콘" src="/icon/person.png"/>
                <h2>나의 당근</h2>
            </button>
        </Container>
    );
}

const Container = styled.div`
    position: fixed; /* 아래에 고정 */
    bottom: 0;
    width: 100%;
    height: 110px;

    display: flex;
    justify-content: space-around;
    
    border-top: 2px solid gray;
    background-color: white;

    img {
        width: 70px;
        height: 70px;
    }

    h2 { margin: 0; }
`