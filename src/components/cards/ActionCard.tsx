import React from 'react';
import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";

const ActionCard = ({ title, description }) => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg">{title}</h3>
      </CardHeader>
      <CardBody className="space-y-4">
        <p className="text-small text-default-500">{description}</p>
        <div className="flex gap-2">
          <Button color="primary">Save Changes</Button>
          <Button variant="bordered">Cancel</Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ActionCard;