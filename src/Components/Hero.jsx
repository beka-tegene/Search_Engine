import React, { useState } from "react";
import {
  Box,
  Paper,
  Divider,
  InputBase,
  IconButton,
  ImageListItem,
  Stack,
  Typography,
  CardMedia,
  CardActionArea,
  Card,
  CardContent,
} from "@mui/material";
import { Search, CenterFocusWeak, Mic } from "@mui/icons-material";
import logo from "../Image/logos.png";
import image from "../Image/Frame 880.png";
import image1 from "../Image/Frame 881.png";
import image2 from "../Image/Frame 882.png";
import image3 from "../Image/Frame 883.png";
import image4 from "../Image/Frame 884.png";
import image5 from "../Image/Frame 885.png";
import image6 from "../Image/Frame 886.png";
import image7 from "../Image/Frame 887.png";
const DUMMY_DATA = [
  {
    img: image,
    title: "NEWS",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: image1,
    title: "NEWS 1",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: image2,
    title: "NEWS 2",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: image3,
    title: "NEWS 3",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: image4,
    title: "NEWS 4",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: image5,
    title: "NEWS 5",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: image6,
    title: "NEWS 6",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    img: image7,
    title: "NEWS 7",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
];
const Hero = () => {
  const [searchEngine, setSearchEngine] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchEngine);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: 4,
        padding: "1rem 3%",
      }}
    >
      <Stack
        direction={"column"}
        height={"40vh"}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        gap={3}
      >
        <ImageListItem sx={{ width: 200 }}>
          <img src={logo} alt="logo" />
        </ImageListItem>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 500,
          }}
          onSubmit={submitHandler}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <Search />
          </IconButton>
          <InputBase
            type="search"
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search or type web address"
            inputProps={{ "aria-label": "Search or type web address" }}
            onChange={(e) => setSearchEngine(e.target.value)}
          />
          <IconButton sx={{ p: "10px" }} aria-label="Mic">
            <Mic />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="CenterFocusWeak"
          >
            <CenterFocusWeak />
          </IconButton>
        </Paper>
      </Stack>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          overflowY: "scroll",
          position: "sticky",
          bottom: 0,
          top: "auto",
          zIndex: 0,
          maxHeight: `calc(60vh - 20px)`,
        }}
      >
        {DUMMY_DATA.length > 0 ? (
          DUMMY_DATA?.map((item, index) => (
            <Card sx={{ maxWidth: 300 }} key={index}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontSize: "16px", fontWeight: "700" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "12px" }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.img}
                  alt="logo"
                />
              </CardActionArea>
            </Card>
          ))
        ) : (
          <Box sx={{ color: "#FFFFFF" }}>There is no NEWS</Box>
        )}
      </Stack>
    </Box>
  );
};

export default Hero;
