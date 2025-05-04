import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "../db";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // API endpoints can be added here
  app.get('/api/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
