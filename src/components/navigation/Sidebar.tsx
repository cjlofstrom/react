import React from 'react';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Home, Settings, User, Bell, Mail } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={18} />, label: 'Home', key: 'home' },
    { icon: <User size={18} />, label: 'Profile', key: 'profile' },
    { icon: <Mail size={18} />, label: 'Messages', key: 'messages' },
    { icon: <Bell size={18} />, label: 'Notifications', key: 'notifications' },
    { icon: <Settings size={18} />, label: 'Settings', key: 'settings' }
  ];

  return (
    <div className="w-64 h-screen bg-content1">
      <div className="p-4 border-b">
        <h3 className="text-foreground">Dashboard</h3>
      </div>
      <Listbox variant="flat" aria-label="Navigation menu">
        {menuItems.map((item) => (
          <ListboxItem
            key={item.key}
            startContent={item.icon}
          >
            {item.label}
          </ListboxItem>
        ))}
      </Listbox>
    </div>
  );
};

export default Sidebar;