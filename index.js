const { ApolloServer, gql } = require("apollo-server");
const express = require("express");
require("./config");
const { ToDoTask } = require("./models/toDoTask");

const typeDefs = gql`
  type ToDoTask {
    id: ID!
    userName: String
    text: String
    isCompleted: Boolean
  }

  type Query {
    getToDoTasks: [ToDoTask]
  }

  type Mutation {
    addToDoTask(userName: String, text: String!, isCompleted: Boolean): ToDoTask
  }
`;

const exampleToDoTask = [
  {
    userName: "someone",
    text: "sdasa",
    isCompleted: false
  }
];

const resolvers = {
  Query: {
    getToDoTasks: async () => {
      const response = await ToDoTask.find({}).exec();
      return response;
    }
  },
  Mutation: {
    addToDoTask: async (_, args) => {
      try {
        let response = await ToDoTask.create(args);
        return response;
      } catch (e) {
        return e.message;
      }
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
