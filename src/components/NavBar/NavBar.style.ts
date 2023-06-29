import { styled } from "styled-components";
import { device } from "../../utils";

export const NavBarContainer = styled.div`
  width: 100vw;
  height: 6vh;
  background-color: ${({ color }) => color};
  display: flex;
  fled-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
  margin-left: 50px;
  @media ${device.tablet} {
    margin-left: 0px;
    width: 50px;
    margin-left: 3px;
  }
  @media ${device.mobileM} {
    margin-left: 0px;
    width: 50px;
    margin-left: 3px;
  }
`;

export const LogoTitle = styled.span`
  font-size: 20px;
  align-self: center;
  @media ${device.tablet} {
    margin-left: 0px;
    font-size: 12px;
  }
  @media ${device.mobileM} {
    margin-left: 0px;
    font-size: 12px;
  }
`;

export const Label = styled.span`
  font-size: 20px;
  margin-left: 20%;
  @media ${device.tablet} {
    margin-left: 10px;
    font-size: 12px;
    width: 100px;
    margin-top: 10px;
  }
  @media ${device.mobileM} {
    margin-left: 10px;
    font-size: 12px;
    width: 100px;
    margin-top: 10px;
  }
  @media ${device.mobileM} {
    margin-left: 10px;
    font-size: 12px;
    width: 100px;
    margin-top: 10px;
  }
`;

export const SettingsContainer = styled.div`
  width: 6vw;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  z-index: 1;
  @media ${device.tablet} {
    font-size: 12px;
    width: 50%;
  }
  @media ${device.mobileM} {
    font-size: 12px;
    width: 50%;
  }
  @media ${device.mobileM} {
    font-size: 12px;
    width: 50%;
  }
`;

export const ColorTheme = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 30px;
  padding-top: 10px;
  padding-left: 4px;
  background-color: #dfe6e9;
  span {
    font-size: 14px;
  }
`;

export const Signup = styled.div`
  display: flex;
  width: 100px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  right: 0px;
  cursor: pointer;
  background-color: #000 span {
    color: #fff;
    font-weight: 500;
  }
  @media ${device.tablet} {
    font-size: 12px;
    width: 50%;
  }
  @media ${device.mobileM} {
    width: 50%;
  }
  @media ${device.mobileM} {
    width: 50%;
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  right: 50px;
`;

export const TextAndIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-around;
  @media ${device.tablet} {
    width: 70px;
  }
  @media ${device.mobileM} {
    width: 70px;
  
  @media ${device.mobileS} {
    width: 70px;
  }
`;

export const LoggedInContainer = styled.div`
  display: flex;
  width: 15vw;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  right: 0px;
  cursor: pointer;
  span {
    color: #ffffff;
    font-weight: 500;
  };
  @media ${device.tablet} {
    width: 45%;
  }
  @media ${device.mobileM} {
    width: 45%;
  }
  @media ${device.mobileS} {
    width: 45%;
  }
`;

export const LogoutContainer = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #dfe6e9;
  padding: 1px;
  span {
    color: #000000;
    font-weight: 500;
  };
  @media ${device.tablet} {
    width: 90px;
  }
  @media ${device.mobileM} {
    width: 90px;
  }
  @media ${device.mobileS} {
    width: 90px;
  }
`;

export const SettingsAndSignUP = styled.div`
  position: absolute;
  width: 32%;
  padding-right: 10px;
  right: 5px;
  height: 0px;
  top: 12px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 45px;
  @media ${device.tablet} {
    width: 52%;
  }
  @media ${device.mobileM} {
   width: 52%;
  }
  @media ${device.mobileS} {
   width: 52%;
  }
`;

export const UserEmail = styled.span`
  color: #000000;
  font-size: 18px;
  @media ${device.tablet} {
    font-size: 12px;
  }
  @media ${device.mobileS} {
    font-size: 12px;
  }
  @media ${device.mobileM} {
    font-size: 12px;
  }
`;
