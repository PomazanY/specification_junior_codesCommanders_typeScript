import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import type { Post } from './post.model';


const PostItem = (post: Post) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <Card sx={{ width: 250, margin: 2, cursor: 'pointer' }} onClick={handleClick}>
      <CardContent>
        <div style={{ backgroundColor: 'lightgrey', height: '150px' }}></div>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          Description
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostItem;

