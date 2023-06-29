import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

import logo from "../../storied.png";

import {
  ColorTheme,
  Label,
  LoggedInContainer,
  Logo,
  LogoTitle,
  LogoutContainer,
  NavBarContainer,
  SettingsAndSignUP,
  SettingsContainer,
  Signup,
  TextAndIcon,
  UserEmail,
} from "./NavBar.style";
import { User } from "../../@types";

type IProps = {
  color: string;
  dropdownOpen: boolean;
  onSelectAudioInput: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  audioOptions: string[];
  selectedAudio: string;
  onLoginClick: () => void;
  loggedInUser: User | undefined;
  logout: () => void;
};

const NavBar: React.FC<IProps> = ({
  color,
  onSelectAudioInput,
  audioOptions,
  selectedAudio,
  onLoginClick,
  loggedInUser,
  logout
}) => {
  const [settingsOpened, setSettingsOpened] = useState(false);
  const [loggedInContainerOpen, setloggedInContainerOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('#e0ecfc');

  const toggleSettings = () => {
    setSettingsOpened(!settingsOpened);
  };

  const toggleLoggedIn = () => {
    setloggedInContainerOpen(!loggedInContainerOpen);
  };

  return (
    <div>
      <NavBarContainer color={currentColor}>
        <Logo src={logo} />
        <Label>The main color is {currentColor}</Label>
        <SettingsAndSignUP>
          <SettingsContainer>
            <TextAndIcon onClick={toggleSettings}>
              <UserEmail>Settings</UserEmail>
              {settingsOpened ? <FiChevronDown size={14} /> : <FiChevronRight size={14}  />}
            </TextAndIcon>
            {settingsOpened && (
              <>
                <select
                  value={selectedAudio}
                  onChange={onSelectAudioInput}
                  style={{ backgroundColor: "#FFE6CC" }}
                >
                  {audioOptions.map((option) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
                <ColorTheme>
                  <input
                    type="color"
                    onChange={(e) => setCurrentColor(e.target.value)}
                  />
                </ColorTheme>
              </>
            )}
          </SettingsContainer>
          {!loggedInUser ? (
            <Signup onClick={onLoginClick}>
              <span>Sign up</span>
            </Signup>
          ) : (
            <LoggedInContainer>
              <TextAndIcon onClick={toggleLoggedIn}>
                <UserEmail style={{ color: '#000000' }}>{loggedInUser.email}</UserEmail>
                {loggedInContainerOpen ? <FiChevronDown /> : <FiChevronRight />}
              </TextAndIcon>
              {loggedInContainerOpen && (
                <LogoutContainer onClick={logout}>
                  <span>Log out</span>
                </LogoutContainer>
              )}
            </LoggedInContainer>
          )}
        </SettingsAndSignUP>
      </NavBarContainer>
    </div>
  );
};

export default NavBar;
