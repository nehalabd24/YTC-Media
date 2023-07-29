import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChannelCard, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Box } from "@mui/material";
import LoadingBar from 'react-top-loading-bar'

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(progress + 20)
    fetchFromApi(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    ).finally(() =>setProgress(50))
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    ).finally(() =>setProgress(100))
  }, [id]);

  return (
    <Box minHeight="95vh">
            <LoadingBar
        color='#FC1503'
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(125,247,255,1) 0%, rgba(164,52,227,1) 55%, rgba(255,0,243,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{mr: {sm: '100px'}}} />
          {videos && <Videos videos={videos}/>}
        </Box>
    </Box>
  );
};

export default ChannelDetail;
 