import axios from "axios";
import { env } from "../config/env";
import { sendToQueue } from "../queue";

export const getCars = async () => {
  const response = await axios({
    method: "GET",
    url: `${env.externalApi}/v1/carro`,
    auth: {
      username: env.apiUser,
      password: env.apiPassword
    }
  });

  return response.data;
};

export const createCar = async (carData: any) => {
  const response = await axios.post(
    `${env.externalApi}/v1/carro`,
    carData,
    {
      auth: {
        username: env.apiUser,
        password: env.apiPassword
      }
    }
  );

  const car = response.data;

  await sendToQueue({
    car_id: car.id,
    created_at: new Date()
  });

  return car;
};