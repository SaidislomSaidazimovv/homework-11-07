import React, { useState } from "react";
import { Input } from "antd";
import TopMixedMusic from "../components/TopMixedMusic/TopMixedMusic";

const Dashboard = ({ code }) => {
  const [title, setTitle] = useState("");
  
  return (
    <div className="p-5">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-[400px]"
        type="text"
        placeholder="Searching..."
        size="large"
      />
      <TopMixedMusic />
    </div>
  );
};

export default Dashboard;
