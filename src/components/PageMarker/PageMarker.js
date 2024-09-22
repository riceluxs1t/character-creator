import styled from "styled-components";

const PageMarker = (props) => {
  return <Wrapper> {props.children} </Wrapper>;
};

const Wrapper = styled.p`
  position: absolute;
  width: fit-content;
  top: 0px;
  left: 16px;
`;

export default PageMarker;
