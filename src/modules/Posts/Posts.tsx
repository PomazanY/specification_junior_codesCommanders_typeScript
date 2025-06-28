import { useGetPostsQuery } from '../../shared/redux/posts/posts-api';

import Container from '../Container/Container';
import type { Post } from './post.model';
import PostItem from './PostItem/PostItem';

import { Box } from '@mui/material';


const Posts = () => {
    const { data, isLoading, error } = useGetPostsQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;

    return (
        <Container>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent:'center' }}>
                {data?.map((post: Post) => (
                    <PostItem key={post.id} id={post.id} title={post.title} />
                ))}
            </Box>

        </Container>

    )
}

export default Posts;