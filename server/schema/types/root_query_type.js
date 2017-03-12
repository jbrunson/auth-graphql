const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummyField: { type: GraphQLID},
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        // Either returns a user or null
        return req.user;
      }
    }
  }
});

module.exports = RootQueryType;
