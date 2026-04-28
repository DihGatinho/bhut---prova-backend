import { Request, Response } from "express";
import { getCars, createCar } from "../services/carService";

export const getCarsController = async (req: Request, res: Response) => {
  try {
    const data = await getCars();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar carros" });
  }
};

export const createCarController = async (req: Request, res: Response) => {
  try {
    const car = await createCar(req.body);
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar carro" });
  }
};