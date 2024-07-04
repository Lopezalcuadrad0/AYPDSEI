import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query.ts";
import { Mutation } from "./resolvers/mutation.ts";
import { typeDefs } from "./gql/schema.ts";
import mongoose from "mongoose";

// Obtener las variables de entorno usando Deno.env.get
const MONGO_URL = Deno.env.get("MONGO_URL");
if (!MONGO_URL) {
  throw new Error("Please provide a valid MongoDB connection string");
}

const API_KEY = Deno.env.get("API_KEY1");
if (!API_KEY) {
  throw new Error("Please provide an API key");
}

Deno.env.get("MONGO_URL");
if(!MONGO_URL){throw new Error("Please privide valid mongo url address")};


await mongoose.connect(MONGO_URL);

console.info("Connnected to Mongo DB 🤖");
// Configurar el servidor Apollo
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
});

// Iniciar el servidor
const { url } = await startStandaloneServer(server, { listen: { port: 8003 } });
console.info(`🚀 Server ready at ${url}`);
