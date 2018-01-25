const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString},
    firstName: { type: GraphQLString},
    age: { type: GraphQLInt}
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString }},
      resolve(parentValue, args) { // Go into Database and find actual Data. Usually A-sync
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then(resp => resp.data); //returns data from response because of axios
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
