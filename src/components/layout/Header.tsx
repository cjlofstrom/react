import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, Button } from "@nextui-org/react";
import { Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <h1 className="font-semibold text-lg">Dashboard</h1>
      </NavbarBrand>
      <NavbarContent justify="end">
        <Button isIconOnly variant="light">
          <Bell size={20} />
        </Button>
        <Button isIconOnly variant="light">
          <User size={20} />
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;