import React from 'react';
import { Input, Button } from "@nextui-org/react";
import { Search } from 'lucide-react';

const SearchInput = ({ placeholder = "Search..." }) => {
  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder={placeholder}
        startContent={<Search size={18} />}
      />
      <Button size="sm" color="primary">
        Search
      </Button>
    </div>
  );
};

export default SearchInput;