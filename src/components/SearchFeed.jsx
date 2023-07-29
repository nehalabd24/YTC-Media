import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const SearchFeed = () => {
  const [videos, setVideos] = useState("");
  const { searchTerm } = useParams();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(progress + 20);
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .finally(() => setProgress(100));
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2, ml: 4 }}>
      <LoadingBar
        color="#FC1503"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for:{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span>
      </Typography>

      {videos && <Videos videos={videos} />}
    </Box>
  );
};

export default SearchFeed;
