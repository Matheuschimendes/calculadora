import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  padding: 50px;
  justify-content: center;
  align-items: center;
  background-color: rgb(139, 139, 139);
`;

export const Content = styled.div`
  width: 100px;
  min-width: 250px;
  background-color: rgb(255, 255, 255);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
