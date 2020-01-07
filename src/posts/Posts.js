import React, { useEffect, useState } from 'react';
import Container from '../shared/components/UI/Container/container';
import PostsForm from './components/Form/Form';
import PostService from './services/post';
import PostsTable from './components/Table/Table';
import Card from '../shared/components/UI/Card/card';

const Posts = () => {
  const onSubmitHandler = post => {
    PostService.save(post);
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const posts = await PostService.get();
      setPosts(posts);
    }

    fetchPosts();
  }, []);

  return (
    <Container>
      <Card>
        <h1>Posts</h1>
        <PostsForm onSubmit={onSubmitHandler} />
      </Card>

      <Card>
        <h1>Últimos Posts</h1>
        <PostsTable posts={posts} />
      </Card>
      
    </Container>
  );
};

export default Posts;
