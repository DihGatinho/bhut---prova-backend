import amqp from "amqplib";
import axios from "axios";
import { env } from "../config/env";
import { Log } from "../models/logModel";

const QUEUE = "car_created";

export const startConsumer = async () => {
  const conn = await amqp.connect(env.rabbitUrl);
  const channel = await conn.createChannel();

  await channel.assertQueue(QUEUE);

  channel.consume(QUEUE, async (msg) => {
    if (!msg) return;

    const data = JSON.parse(msg.content.toString());

    await axios.post(env.webhookUrl, data);

    await Log.create({
      car_id: data.car_id,
      data_hora_criacao: data.created_at,
      data_hora_processamento: new Date()
    });

    channel.ack(msg);
  });
};