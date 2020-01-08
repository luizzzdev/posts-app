import React, { useEffect, useState } from 'react';
import Container from '../shared/components/UI/Container/container';
import PostsForm from './components/Form/Form';
import PostService from './services/post';
import PostsTable from './components/Table/Table';
import Card from '../shared/components/UI/Card/card';
import Layout from '../shared/components/UI/Layout/layout';
import Pagination from '../shared/components/UI/Pagination/Pagination';

const Posts = () => {
  const onSubmitHandler = post => {
    PostService.save(post);
  };

  const [posts, setPosts] = useState([]);

  const [pageState, setPage] = useState({
    page: 1,
    totalPages: 0,
    limit: 5,
  });

  useEffect(() => {
    async function fetchPosts() {
      const response = await PostService.get(pageState.page, pageState.limit);
      const { page, totalPages } = response;
      setPosts(response.data);
      setPage(prevState => ({
        ...prevState,
        page,
        totalPages,
      }));
    }

    fetchPosts();
  }, [pageState.page]);

  const pageChangeHandler = page =>
    setPage(prevState => ({
      ...prevState,
      page,
    }));

  return (
    <Layout>
      <Container>
        <Card>
          <h1>Posts</h1>
          <PostsForm onSubmit={onSubmitHandler} />
        </Card>

        <Card>
          <h1>Últimos Posts</h1>
          <PostsTable posts={posts} />
          <Pagination page={pageState.page} pageHandler={pageChangeHandler} />
        </Card>
      </Container>
    </Layout>
  );
};

export default Posts;
