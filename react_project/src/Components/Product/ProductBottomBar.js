import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { createGlobalStyle } from "styled-components";

const Bar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  background-color: white;
  border-top: 1px solid #333;
  padding: 0 30px;
  box-sizing: border-box;
  font-size: 30px;
  gap: 30px;
  z-index: 999;
`;
const Price = styled.span`
  font-size: 20px;
  border-left: 2px solid black;
  padding-left: 30px;
`;
const GlobalStyle = createGlobalStyle`
    body {
        padding: 100px 0;
    }
`;
function ProductBottomBar() {
  return (
    <>
      <Bar>
        <FontAwesomeIcon icon={faHeart} />
        <Price>가격</Price>
      </Bar>
      <GlobalStyle />
    </>
  );
}

export default ProductBottomBar;
