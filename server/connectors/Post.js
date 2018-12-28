import Post from "../models/Post";
import User from "../models/User";

const PostConnector = {
  getPost: async ({ _id }) => {
    return await Post.findById(_id)
      .populate()
      .then(post => post)
      .catch(err => err);
  },
  getAllPosts: async () => {
    return await Post.find()
      .populate()
      .then(posts => posts)
      .catch(err => err);
  },
  createPost: async ({ title, body, published, author }) => {
    const newPost = await new Post({ title, body, published, author });

    return new Promise((resolve, reject) => {
      newPost.save((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  },
  deletePost: async ({ _id }) => {
    return await Post.findOneAndDelete({ _id });
  },
  post: {
    subscribe: (parent, args, { pubsub }) => {
      //return pubsub.asyncIterator(channel)
    }
  },
  author: async ({ author }) => {
    return await User.findById(author);
  }
};

export default PostConnector;
