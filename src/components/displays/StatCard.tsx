import React from 'react';
import { Card, CardBody } from "@nextui-org/react";
import { ArrowUp, ArrowDown } from 'lucide-react';

const StatCard = ({ label, value, change, isPositive }) => {
  return (
    <Card>
      <CardBody>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-small text-default-500">{label}</p>
            <h3 className="text-xl font-semibold mt-1">{value}</h3>
          </div>
          <div className={`flex items-center ${isPositive ? 'text-success' : 'text-danger'}`}>
            {isPositive ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
            <span className="ml-1">{change}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default StatCard;