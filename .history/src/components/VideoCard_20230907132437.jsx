import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "./helpers/constants";


const VideoCard = ({video: {id:{videoId},snippet}}) => {
  return <Card>
    <Link>
    <CardMedia />
    </Link>
    </Card>;
};

export default VideoCard;
