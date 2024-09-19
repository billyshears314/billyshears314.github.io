import { Container, Typography } from "@mui/material";
import CompanyCard from "./CompanyCard";
import data from "../data";

function Companies() {
  const companiesData = data.companies;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Work Experience
      </Typography>
      {companiesData.map((company, index) => (
        <CompanyCard
          key={index}
          companyName={company.name}
          items={company.items}
        />
      ))}
    </div>
  );
}

export default Companies;
