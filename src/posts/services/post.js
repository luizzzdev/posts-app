import { client } from '../../shared/services/client';
import parseRequest from "../../shared/services/parseRequest";

const PostService = {
  save(post) {
    client.post('/posts', post);
  },
  async get(_page = 0, _limit = 10) {
    return parseRequest(await client.get('/posts', { params: { _page, _limit } }));
  },
};

export default PostService;
