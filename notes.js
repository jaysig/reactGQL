Restful Routing - Collection of records on a server
   Post, Get, Put, Delete
   Problems: Too many requests once you nest your data,

Graph: Refers to the graph Data Structure. Edges connect the nodes
// Find company names for where friends work
Query {
  user(id: "23"){
    friends {
      company{
        name
      }
    }
  }
}

GraphQL needs the root query as an entry point 'for' retrieving Data


You resolve a relationship of data by using axios get within a resolve function

//GraphIQL Notes
if you want to query four two companies you need to assign them to keys firstName
{
  apple: company(id: "11"){
    ...companyDetails
  },
  google: company(id: "12")
}

fragment companyDetails on Company { //More on the front end
  id
  name
  description
}

//Mutations
mutation {
  addUser(firstName: "John", age: 26) {
    id
    firstName
  }
}
//GraphQL Clients
Lokka, Apollo, Relay --- from simple to complex

//Mutation and Query
export default graphql(mutation)(
  graphql(query)(SongList)
);

// Use prop in a GQL query
export default graphql(fetchSong, {
  options: (props) => { return { variables: { id: props.params.id } }; }
})(SongDetail);

//Bind data with apollo and give everything an id
const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

//optimisticResponse to update data instantly before it comes back from the db
// This info comes from the network request tab. Video 72
optimisticResponse: {
  __typename: 'Mutation',
  likeLyric: {
    id,
    __typename: 'LyricType',
    likes: likes + 1
  }
}
