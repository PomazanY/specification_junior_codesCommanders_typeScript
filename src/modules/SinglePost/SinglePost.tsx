import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useGetPostByIdQuery, useGetCommentsByPostIdQuery } from "../../shared/redux/posts/posts-api";
import ButtonSend from "../../shared/components/ButtonSend/ButtonSend";
import Container from "../Container/Container";

import styles from './SinglePost.module.css';

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const SinglePost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: post, isLoading: loadingPost } = useGetPostByIdQuery(id);
  const { data: comments, isLoading: loadingComments } = useGetCommentsByPostIdQuery(id);

  if (loadingPost || loadingComments) return <p>Loading...</p>;

  const handleClick=()=>{
    navigate('/')
  }

  return (
    <Container>
      <ButtonSend type="submit" onClick={handleClick}>return to posts</ButtonSend>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <hr />
      
        <p className={styles.titleComment}>Comments:</p>
<div className={styles.container}>
        {comments.map((comment: Comment) => (
            <div 
            key={comment.id} 
            className={styles.carts}>
              <p><strong>Name:</strong> {comment.name}</p>
              <p><strong>Email:</strong> {comment.email}</p>
              <p>{comment.body}</p>
            </div>
          ))}
      </div>
    </Container>
  );
};
console.log(styles)
export default SinglePost;
