const postsResolvers = require("./posts");
const usersResolvers = require("./users");


module.exports = {
  Query: {
   ...postsResolvers.Query,
//   ...usersResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    // ...commentsResolvers.Mutation
  },
  Subscription: {
    ...postsResolvers.Subscription
  }
};

