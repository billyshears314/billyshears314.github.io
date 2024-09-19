import React from "react";
import { Typography, List, ListItem } from "@mui/material";

const CompanyCard = ({ companyName, items }) => {
  return (
    <>
      <Typography variant="h6" component="h2" gutterBottom>
        <u>{companyName}</u>
      </Typography>
      <List sx={{ listStyleType: "disc", pl: 2 }}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            sx={{ display: "list-item", marginLeft: "20px" }}
          >
            <Typography variant="body2">{item}</Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CompanyCard;
