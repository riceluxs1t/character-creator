import styled from "styled-components";

const Paragraph = styled.p`
  text-align: justify;
  margin: 0 140px;
  &:not(:first-of-type) {
    text-indent: 2em;
    margin-top: 3em;
  }
`;

export default Paragraph;
