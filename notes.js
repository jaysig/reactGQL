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
