import React, { useState } from "react";
import {Container, Button, SidebarContainer, Logo, SlickBar, Item, Text, Profile, Details, Name, Logout} from './indexComponents';

//All the svg files
import logo from "../../assets/logo.svg";
import Grid from "../../assets/grid.svg";
import TeamImg from "../../assets/social.svg";
import Calender from "../../assets/sceduled.svg";
import Chat from "../../assets/message-circle.svg";
import Documents from "../../assets/draft.svg";
import PowerOff from "../../assets/power-off-solid.svg";

import { useAuth } from "../../contexts/AuthContext";

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);

  const {currentUser, logOut} = useAuth();

  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}>
        Click
      </Button>
      <SidebarContainer>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <SlickBar clicked={click}>
          <Item
            onClick={() => setClick(false)}
            exact
            activeClassName="active"
            to="/dashboard/"
          >
            <img src={Grid} alt="Dashboard" />
            <Text clicked={click}>Dashboard</Text>
          </Item>
          
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/dashboard/calender"
          >
            <img src={Calender} alt="Events" />
            <Text clicked={click}>Events</Text>
          </Item>
          
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/dashboard/teams"
          >
            <img src={TeamImg} alt="Teams" />
            <Text clicked={click}>Teams</Text>
          </Item>

          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/dashboard/documents"
          >
            <img src={Documents} alt="Books" />
            <Text clicked={click}>Books</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/dashboard/projects"
          >
            <img src={Chat} alt="Chat" />
            <Text clicked={click}>Chat</Text>
          </Item>
        </SlickBar>

        <Profile clicked={profileClick}>
          <img
            onClick={() => handleProfileClick()}
            src={currentUser.photoURL}
            alt="Profile"
          />
          <Details clicked={profileClick}>
            <Name>
              <h4>{currentUser.displayName}</h4>
              <a href="/#">view&nbsp;profile</a>
            </Name>

            <Logout>
              <img src={PowerOff} onClick={logOut} alt="logout" />
            </Logout>
          </Details>
        </Profile>
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
