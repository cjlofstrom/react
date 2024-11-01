import React from 'react';
import { Card, CardBody, CardHeader, Input, Button } from "@nextui-org/react";

const SettingsForm = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg">Account Settings</h3>
      </CardHeader>
      <CardBody className="space-y-4">
        <Input
          label="Display Name"
          placeholder="Enter your display name"
          variant="bordered"
        />
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
        />
        <Button color="primary">Update Settings</Button>
      </CardBody>
    </Card>
  );
};

export default SettingsForm;