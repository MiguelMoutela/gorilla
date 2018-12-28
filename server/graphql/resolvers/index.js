import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import Post from "./Post/";

const resolvers = [User, Post];

export default mergeResolvers(resolvers);
