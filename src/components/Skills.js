import { Box, Chip, Typography } from "@mui/material";
import data from "../data";
import styles from "./Skills.module.css";

function Skills() {
  const skills = data.skills;

  return (
    <Box>
      <Typography variant="h4">Skills</Typography>
      <Box mt={2}>
        {skills.map((skill) => (
          <div>
            <div className={styles.type}>{skill.type}</div>
            {skill.items.map((item) => (
              <Chip
                key={item}
                label={item}
                sx={{ marginRight: 1, marginBottom: 1 }}
              />
            ))}
          </div>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
