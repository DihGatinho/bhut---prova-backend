import amqp from "amqplib";
import { env } from "../config/env";

const QUEUE = "car_created";

export const sendToQueue = async (message: any) => {
  const conn = await amqp.connect(env.rabbitUrl);
  const channel = await conn.createChannel();

  await channel.assertQueue(QUEUE);

  channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(message)));
};