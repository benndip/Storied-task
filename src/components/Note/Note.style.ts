import { styled } from "styled-components";
import { device } from "../../utils";

export const Container = styled.div`
  background-color: #c8d6e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 20px;
  align-self: flex-start;
  min-width: 250px;
  padding-top: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

export const NoteTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #222f3e;
`;

export const NoteDate = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: #222f3e;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const DeleteAndFavourite = styled.div`
    width: 90%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const IconContainer = styled.div`
    cursor: pointer;
`
