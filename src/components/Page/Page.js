import styled from "styled-components";

const Page = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  column-count: 2;
  column-gap: 150px;
  max-width: 128rem;
  min-height: 1000px;
  max-height: 1000px;
  margin: 32px auto;
  border: 2px solid hsl(35deg 10% 40%);
  padding: 50px;
  background: linear-gradient(
    to right,
    hsl(35deg, 30%, 90%),
    hsl(35deg, 30%, 90%) 47%,
    hsl(35deg, 30%, 70%) 49.5%,
    hsl(35deg, 20%, 50%) 50%,
    hsl(35deg, 30%, 70%) 50.5%,
    hsl(35deg, 30%, 90%) 53%,
    hsl(35deg, 30%, 90%)
  );
`;

export default Page;
