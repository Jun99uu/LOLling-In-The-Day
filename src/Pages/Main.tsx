import styled from "styled-components";
import Layout from "../Components/Layout";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
`;

export default function Main() {
  return (
    <Container>
      <Layout />
    </Container>
  );
}
