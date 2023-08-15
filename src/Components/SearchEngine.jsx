import {
  AppBar,
  Divider,
  IconButton,
  ImageListItem,
  InputBase,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../Image/logos.png";
import {
  CenterFocusWeak,
  Chat,
  Image,
  Info,
  Mic,
  Newspaper,
  Search,
  Settings,
  VideoFile,
} from "@mui/icons-material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const SearchEngine = () => {
  const [searchEngine, setSearchEngine] = useState();
  const [searchResult, setSearchResult] = useState();
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("q");
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyAsKwDSU0m8kypQQtUcUKLjBLh4DflNoRY&cx=f05832b7c91cb41cb&q=${encodeURIComponent(
          searchQuery
        )}`
      )
      .then((response) => {
        console.log(response.data);
        setSearchResult(response?.data?.items);
      })
      .catch((error) => {
        console.log(error);
        console.log("world");
      });
  }, [searchQuery]);
  const submitHandler = async (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchEngine.trim())}`);
    // axios
    //   .get(
    //     `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=017576662512468239146:omuauf_lfve&q=${encodeURIComponent(
    //       searchEngine.trim()
    //     )}`
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //     console.log("hello");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     console.log("world");
    //   });
  };
  return (
    <Stack direction={"column"} alignItems={"flex-start"}>
      <AppBar
        sx={{
          backgroundColor: "#1B1D23",
          color: "#283734",
          padding: "1rem 0",
          position: "relative",
        }}
        elevation={1}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "0",
          }}
        >
          <Stack direction={"row"} gap={5} alignItems={"flex-start"}>
            <ImageListItem sx={{ width: "110px" }}>
              <img src={logo} alt="logo brand" />
            </ImageListItem>
            <Stack direction={"column"} gap={2}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 650,
                  borderRadius: 10,
                  backgroundColor: "#474747",
                }}
                onSubmit={submitHandler}
              >
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
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
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={4}
                >
                  <Link style={{ color: "red" }}>
                    <Search /> All
                  </Link>
                  <Link style={{ color: "#676767" }}>
                    <Image /> Image
                  </Link>
                  <Link style={{ color: "#676767" }}>
                    <Newspaper /> News
                  </Link>
                  <Link style={{ color: "#676767" }}>
                    <VideoFile /> Video
                  </Link>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={2}
                >
                  <Info sx={{ color: "#C5C5C5", cursor: "pointer" }} />
                  <Divider
                    sx={{
                      width: "1px",
                      height: "4vh",
                      backgroundColor: "#979797",
                    }}
                  />
                  <Chat sx={{ color: "#C5C5C5", cursor: "pointer" }} />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Settings sx={{ color: "#C5C5C5", cursor: "pointer" }} />
          </Stack>
        </Toolbar>
      </AppBar>
      <Stack
        direction={"row"}
        gap={5}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        sx={{ padding: ".5rem 12%", width: "100%", backgroundColor: "#17191E" }}
        minHeight={"85vh"}
      >
        <Stack direction={"column"} gap={2}>
          {/* <Stack
            direction={"column"}
            gap={3}
            sx={{
              width: 650,
              backgroundColor: "#1F2128",
              color: "#E7E7E7",
              padding: "1rem",
              borderRadius: 3,
            }}
          >
            <Stack direction={"column"} gap={1}>
              <Link style={{ color: "#3366CC" }}>link name 1</Link>
              <Link style={{ color: "gray", fontSize: "13px" }}>
                link Domain 1
              </Link>
              <Typography variant="span" sx={{ color: "#979797" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat alias molestiae blanditiis repudiandae facere
                laboriosam illum molestias temporibus, eveniet neque dolore
                adipisci culpa? Sint explicabo nesciunt vel natus quidem eum.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"column"}
            gap={3}
            sx={{
              width: 650,
              backgroundColor: "#1F2128",
              color: "#E7E7E7",
              padding: "1rem",
              borderRadius: 3,
            }}
          >
            <Stack direction={"column"} gap={1}>
              <Link style={{ color: "#3366CC" }}>link name 1</Link>
              <Link style={{ color: "gray", fontSize: "13px" }}>
                link Domain 1
              </Link>
              <Typography variant="span" sx={{ color: "#979797" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat alias molestiae blanditiis repudiandae facere
                laboriosam illum molestias temporibus, eveniet neque dolore
                adipisci culpa? Sint explicabo nesciunt vel natus quidem eum.
              </Typography>
            </Stack>
            <Stack direction={"column"} gap={1}>
              <Link style={{ color: "#3366CC" }}>link name 1</Link>
              <Link style={{ color: "gray", fontSize: "13px" }}>
                link Domain 1
              </Link>
              <Typography variant="span" sx={{ color: "#979797" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat alias molestiae blanditiis repudiandae facere
                laboriosam illum molestias temporibus, eveniet neque dolore
                adipisci culpa? Sint explicabo nesciunt vel natus quidem eum.
              </Typography>
            </Stack>
          </Stack> */}
          <Stack
            direction={"column"}
            gap={3}
            sx={{
              width: 650,
              backgroundColor: "#1F2128",
              color: "#E7E7E7",
              padding: "1rem",
              borderRadius: 3,
            }}
          >
            {searchResult?.map((item, index) => (
              <Stack direction={"column"} gap={1} key={index}>
                <Link
                  style={{
                    color: "gray",
                    fontSize: "13px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                  to={item.displayLink}
                >
                  <Link style={{ color: "#3366CC", fontSize: "16px" }}>
                    {item.title}
                  </Link>
                  {item.displayLink}
                </Link>
                <Typography variant="span" sx={{ color: "#979797" }}>
                  {item.htmlSnippet}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Stack
          direction={"column"}
          gap={3}
          sx={{
            width: 400,
            backgroundColor: "#1F2128",
            color: "#E7E7E7",
            padding: "1rem",
            borderRadius: 3,
          }}
        >
          hello
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SearchEngine;
