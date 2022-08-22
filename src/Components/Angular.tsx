import styled from "styled-components";

const AngularLogo = styled.div`
  width: 100%;
  height: 100%;
  background: conic-gradient(#e7bb6a, #ba98ed, #d60000);
  border-radius: 100%;
  transform: rotate(-90deg);
`;
export default function Angular() {
  return <AngularLogo />;
}
