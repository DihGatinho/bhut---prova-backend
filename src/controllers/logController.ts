import { Request, Response } from "express";
import { Log } from "../models/logModel";

export const getLogs = async (req: Request, res: Response) => {
  try {
    const logs = await Log.find();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar logs" });
  }
};