import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SideBar, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import LoadingBar from 'react-top-loading-bar'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState("");
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    setProgress(progress + 20)
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    ).finally(() =>setProgress(100))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <LoadingBar
        color='#FC1503'
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Box
        sx={{
          height: { sx: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Copyright &copy; 2023 YTC Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 } }>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        {videos && <Videos videos={videos} />}
      </Box>
    </Stack>
  );
};

export default Feed;
