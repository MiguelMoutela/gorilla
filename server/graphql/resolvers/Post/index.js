import PostConnector from "../../../connectors/Post";
import UserConnector from "../../../connectors/User";

export default {
    Query: {
        getPost: async (parent, { _id }, context, info) => {
            return PostConnector.getPost({ _id })
                .then(user => user)
                .catch(err => err);
        },
        getAllPosts: async (parent, args, context, info) => {
            return PostConnector.getAllPosts()
                .then(user => user)
                .catch(err => err);
        }
    },
    Mutation: {
        createPost: async (
            parent,
            { title, body, published, author },
            { token },
            info
        ) => {
            const errors = [];

            if (!UserConnector.isAuthenticated({ token })) {
                throw new Error("You must be logged in to create a post.");
            }

            return PostConnector.createPost({ title, body, published, author })
                .then(post => post)
                .catch(err => {
                    if (err.message) {
                        errors.push({ value: err.message });
                        return { errors };
                    }

                    throw new Error(err);
                });
        },
        deletePost: async (parent, { _id }, context, info) => {
            const errors = [];

            return PostConnector.deletePost({ _id })
                .then(post => post)
                .catch(err => {
                    if (err.message) {
                        errors.push({ value: err.message });
                        return { errors };
                    }

                    throw new Error(err);
                });
        }
    },
    Subscription: {
        post: {
            subscribe: (parent, args, { pubsub }) => {
                //return pubsub.asyncIterator(channel)
            }
        }
    },
    Post: {
        author: async ({ author }, args, context, info) => {
            return PostConnector.author({ author })
                .then(posts => posts)
                .catch(err => err);
        }
    }
};
