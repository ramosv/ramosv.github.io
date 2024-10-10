import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import MuiChip from "@mui/material/Chip";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { styled } from "@mui/material/styles";

import LeaderboardIcon from "@mui/icons-material/Leaderboard";

import ScienceIcon from "@mui/icons-material/Science";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import { useColorScheme } from "@mui/material/styles";
const items = [
  {
    icon: <ScienceIcon />,
    title: "Graduate Researcher",
    description: "University of Colorado Denver",
    textLight: "Jun 2024 - Present",
    textDark: "Jun 2024 - Present",
    textLight1:
      "Conducted research in bioinformatics and healthcare, focusing on high-dimensional biomedical data.",
    textDark1:
      "Conducted research in bioinformatics and healthcare, focusing on high-dimensional biomedical data.",
    textLight2:
      "Leveraged machine learning, deep learning, and graph neural networks to solve complex problems.",
    textDark2:
      "Leveraged machine learning, deep learning, and graph neural networks to solve complex problems.",
    textLight3:
      "Investigating multimodal representations of biomedical data by integrating datasets like multi-omics and medical imaging.",
    textDark3:
      "Investigating multimodal representations of biomedical data by integrating datasets like multi-omics and medical imaging.",
    textLight4:
      "Developing open-source tools to enhance biomedical data analysis for downstream applications.",
    textDark4:
      "Developing open-source tools to enhance biomedical data analysis for downstream applications.",
  },
  {
    icon: <ViewQuiltRoundedIcon />,
    title: "Software Developer",
    description: "Semantic Arts, inc.",
    textLight: "Jan 2024 - Present",
    textDark: "Jan 2024 - Present",
    textLight1:
      "Leading development of an internal accounting system to replace third-party solutions. ",
    textDark1:
      "Leading development of an internal accounting system to replace third-party solutions. ",
    textLight2:
      "Developed software using Python, JavaScript, React and SPARQL.t",
    textDark2: "Developed software using Python, JavaScript, React and SPARQL.",
    textLight3:
      "Conducted code reviews and managed pull requests, maintaining high code quality.",
    textDark3:
      "Conducted code reviews and managed pull requests, maintaining high code quality.",
    textLight4:
      "Developed tools and pipelines for effective data processing and visualization.",
    textDark4:
      "Developed tools and pipelines for effective data processing and visualization.",
  },
  {
    icon: <LeaderboardIcon />,
    title: "Software Developer Intern",
    description: "Brighten the Brain",
    textLight: "Oct 2020 - Apr 2021",
    textDark: "Oct 2020 - Apr 2021",
    textLight1: "Developed company mobile application using C#.",
    textDark1: "Developed company mobile application using C#.",
    textLight2:
      "Optimized the search functionality for hundreds of files, improving user experience. ",
    textDark2:
      "Optimized the search functionality for hundreds of files, improving user experience. ",
    textLight3:
      "Collaborated with another engineer to meet tight project deadlines.",
    textDark3:
      "Collaborated with another engineer to meet tight project deadlines.",
    textLight4: "",
    textDark4: "",
  },
];

const Chip = styled(MuiChip)(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background:
          "linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))",
        color: "hsl(0, 0%, 100%)",
        borderColor: theme.palette.primary.light,
        "& .MuiChip-label": {
          color: "hsl(0, 0%, 100%)",
        },
        ...theme.applyStyles("dark", {
          borderColor: theme.palette.primary.dark,
        }),
      },
    },
  ],
}));

function MobileLayout({ selectedItemIndex, handleItemClick, selectedFeature }) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: 2, overflow: "auto" }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Box
          sx={(theme) => ({
            mb: 2,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: 280,
            backgroundImage: "var(--items-textLight)",
            ...theme.applyStyles("dark", {
              backgroundImage: "var(--items-textDark)",
            }),
          })}
          style={
            items[selectedItemIndex]
              ? {
                  "--items-textLight": items[selectedItemIndex].textLight,
                  "--items-textDark": items[selectedItemIndex].textDark,
                }
              : {}
          }
        />
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: "text.primary", fontWeight: "medium" }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

MobileLayout.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
  selectedFeature: PropTypes.shape({
    description: PropTypes.string.isRequired,
    icon: PropTypes.element,
    imageDark: PropTypes.string.isRequired,
    imageLight: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  selectedItemIndex: PropTypes.number.isRequired,
};

export { MobileLayout };

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: theme.palette.background.paper,
}));

const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

export default function HomePage() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { mode } = useColorScheme();

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Grid container spacing={2} columns={12}>
      <Grid size={{ xs: 12, md: 6 }}>
        <SyledCard sx={{ height: "100%" }}>
          <SyledCardContent>
            <Typography
              component="h2"
              variant="h4"
              gutterBottom
              sx={{ color: "text.primary" }}
            >
              About
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", mb: { xs: 2, sm: 4 } }}
            >
              I'm a graduate student at the University of Colorado Denver,
              blending research and software development to drive advancement in
              computer science. My journey integrates both cutting-edge research
              and practical application, focusing on creating effective
              solutions.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", mb: { xs: 2, sm: 4 } }}
            >
              As a Graduate Researcher, I conduct research in bioinformatics and
              healthcare, focusing on high-dimensional biomedical data. I
              leverage machine learning, deep learning, and graph neural
              networks to solve complex problems. My current work involves
              investigating multimodal representations by integrating datasets
              like multi-omics and medical imaging, and developing open-source
              tools to enhance biomedical data analysis for downstream
              applications.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", mb: { xs: 2, sm: 4 } }}
            >
              {" "}
              Additionally, I work as a Software Developer at Semantic Arts,
              leveraging semantic technologies to develop impactful software
              solutions. My combination of software engineering skills and
              research experience helps me turn advanced concepts into
              practical, real-world applications..
            </Typography>
          </SyledCardContent>
        </SyledCard>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <SyledCard sx={{ height: "100%" }}>
          {items.map(({ icon, title, description }, index) => (
            <Box
              key={index}
              component={Button}
              onClick={() => handleItemClick(index)}
              sx={[
                (theme) => ({
                  p: 2,
                  height: "100%",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }),
                selectedItemIndex === index && {
                  backgroundColor: "action.selected",
                },
              ]}
            >
              <Box
                sx={[
                  {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    gap: 1,
                    textAlign: "left",
                    color: "text.secondary",
                  },
                  selectedItemIndex === index && {
                    color: "text.primary",
                  },
                ]}
              >
                {icon}

                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
              </Box>
            </Box>
          ))}
        </SyledCard>
        <MobileLayout
          selectedItemIndex={selectedItemIndex}
          handleItemClick={handleItemClick}
          selectedFeature={selectedFeature}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <SyledCard
          sx={(theme) => ({
            paddingLeft: 2,
            minHeight: 280,
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
            backgroundColor:
              theme.palette.mode === "dark" ? "grey.900" : "grey.100",
            color: theme.palette.mode === "dark" ? "white" : "black",
          })}
        >
          <Box
            sx={{
              height: "100%",
              pt: 2,
              mb: 2,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {selectedFeature.title}
            </Typography>
            {mode === "dark"
              ? items[selectedItemIndex].textDark
              : items[selectedItemIndex].textLight}
            <Typography variant="body1" fontSize={18} lineHeight={1.8}>
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  {mode === "dark"
                    ? items[selectedItemIndex].textDark1
                    : items[selectedItemIndex].textLight1}
                </li>
                <li>
                  {mode === "dark"
                    ? items[selectedItemIndex].textDark2
                    : items[selectedItemIndex].textLight2}
                </li>
                <li>
                  {mode === "dark"
                    ? items[selectedItemIndex].textDark3
                    : items[selectedItemIndex].textLight3}
                </li>
                <li>
                  {mode === "dark"
                    ? items[selectedItemIndex].textDark4
                    : items[selectedItemIndex].textLight4}
                </li>
              </ul>
            </Typography>
          </Box>
          <Box sx={{ px: 2, pb: 2 }}>
            <Typography
              gutterBottom
              sx={{ color: "text.primary", fontWeight: "medium" }}
            >
              {selectedFeature.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mb: 1.5 }}
            >
              {selectedFeature.description}
            </Typography>
          </Box>
        </SyledCard>
      </Grid>
    </Grid>
  );
}
