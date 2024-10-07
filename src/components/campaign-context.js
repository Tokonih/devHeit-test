import React, { createContext, useContext, useState } from "react";

const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([
    {
      name: "Testing",
      type: "new",
      category: "Entertainment",
      description: "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et suspesstn ....",
    },
    {
      name: "Testing 2",
      type: "new 2",
      category: "Entertainment 2",
      description: "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et suspesstn ....",
    },
  ]);

  console.log(campaigns);

  return (
    <CampaignContext.Provider value={{ campaigns, setCampaigns }}>
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaigns = () => {
  return useContext(CampaignContext);
};
