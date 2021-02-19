import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';
import { Link } from 'react-router-dom';

const HeaderC = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="/" prefix="IBM">
          Watson Auth
        </HeaderName>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar >
            <HeaderNavigation aria-label="Carbon Tutorial" style={{padding:"0"}}>
              <HeaderMenuItem element={Link} to="/">Login</HeaderMenuItem>
            </HeaderNavigation>
            <HeaderNavigation aria-label="Carbon Tutorial" style={{padding:"0"}}>
              <HeaderMenuItem element={Link} to="/display">View</HeaderMenuItem>
            </HeaderNavigation>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default HeaderC;