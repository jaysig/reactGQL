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
