import { client } from '../../shared/services/client';

const PostService = {
  save(post) {
    client.post('/posts', post);
  },
  async get(_page = 0, _limit = 10) {
    return (await client.get('/posts', { params: { _page, _limit } })).data;
  },
};

export default PostService;
