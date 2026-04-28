import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";
import { env } from "./config/env";
import { startConsumer } from "./consumers/carConsumer";

//mongoose.connect(env.mongoUri);

app.listen(env.port, () => {
  console.log(`Server rodando na porta ${env.port}`);
});

//startConsumer();