import { styled } from "styled-components";
import { device } from "../../utils";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const LoginButton = styled.div`
  width: 80%;
  height: 45px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6c5ce7;
  cursor: pointer;
  border-radius: 6px;
`;

export const InputAndButtonContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: row;
  align-items: center;
  height: 45px;
  align-self: center;
  margin-top: 100px;
  justify-content: space-around;
`;

export const AddNoteBtn = styled.div`
  width: 20%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #666666;
  span: {
    color: #ffffff;
  }
  cursor: pointer;
  @media ${device.tablet}{
    width: 30%;
  };
  @media ${device.mobileL}{
    width: 30%;
  }
`;

export const AddNoteInput = styled.input`
  width: 60%;
  outline: none;
  border: 1px solid #eee;
  height: 40px;
  border-radius: 6px;
  padding-left: 20px;
`;

export const NotesContainer = styled.div`
  display: flex;
  width: 64%;
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-top: 100px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media ${device.tablet}{
    width: 100%;
    justify-content: space-around;
    align-self: center;

  };
  @media ${device.mobileL}{
    width: 100%;
    justify-content: space-around;
    align-self: center;
  }
`;

export const AddNoteError = styled.span`
  color: #ee5253;
  margin-top: 10px;
  font-size: 14px;
`

export const AddNoteText = styled.span`
  color: #ffffff;
  font-size: 1.5rem;
  @media ${device.tablet}{
    font-size: 0.7rem;
  };
  @media ${device.mobileL}{
    font-size: 0.7rem;
  }
`

export const DeleteButtons = styled.div`
  width: 80%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const YesBtn = styled.div`
  cursor: pointer;
  width: 30%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #10ac84;
  span: {
    color: #ffffff;
  }
`

export const CancelBtn = styled.div`
  cursor: pointer;
  width: 30%;
  display: flex;
  height: 45px;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  background-color: #ee5253;
  span: {
    color: #ffffff;
  }
`

export const LoginText = styled.span`
  color: #ffffff;
  font-weight: bold;
`
