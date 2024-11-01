import React from 'react';
import { Card, CardBody } from "@nextui-org/react";
import { Info } from 'lucide-react';

const AlertBanner = ({ title, description, color = "primary" }) => {
  return (
    <Card>
      <CardBody>
        <div className="flex gap-2">
          <Info size={20} />
          <div>
            <h4 className="text-medium">{title}</h4>
            <p className="text-small text-default-500">{description}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AlertBanner; 