import React from 'react';
import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import { Settings } from 'lucide-react';

const Panel = ({ title, children }) => {
  return (
    <Card>
      <CardHeader className="flex justify-between">
        <h3 className="text-lg">{title}</h3>
        <Button
          variant="light"
          startContent={<Settings size={18} />}
        >
          Configure
        </Button>
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
};

export default Panel;