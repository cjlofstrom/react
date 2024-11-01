import React from 'react';
import { Card, CardBody, CardHeader, Avatar, Chip } from "@nextui-org/react";
import { User } from 'lucide-react';

const ProfileCard = ({ name = "John Doe", role = "Developer" }) => {
  return (
    <Card>
      <CardHeader className="flex gap-3">
        <Avatar icon={<User size={20} />} />
        <div className="flex flex-col">
          <p className="text-md">{name}</p>
          <p className="text-small text-default-500">{role}</p>
        </div>
        <Chip color="success" className="ml-auto">Online</Chip>
      </CardHeader>
      <CardBody>
        <p className="text-small text-default-500">
          Full-stack developer with expertise in React and Node.js
        </p>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;