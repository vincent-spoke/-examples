import dotenv from "dotenv";
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, "..", "..", ".env"),
});

import express, { Express, Request, Response } from "express";
import { checkEnvironmentVariables, listDatabases } from "./lib/utils";

import { Client } from "@notionhq/client";

import formRouter from "./routes/form";
import webhookRouter from "./routes/webhook";

import cors from "cors";

const app: Express = express();

const root = path.resolve(__dirname, '..', '..');
const client = path.resolve(root, 'client', 'dist');

// SANITY CHWECK
// ENV variables
const missingEnvVars = checkEnvironmentVariables();
// NOTION DATABASES (easy source of error)
if (process.env.NOTION_API_KEY) {
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    listDatabases(notion);
  } catch {
    console.log("⚠️ Could not access Notion.");
  }
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('trust proxy', 1); // trust first proxy
app.use(cors());

app.use(express.static(path.join(client)));

app.get('/health', (_req: Request, res: Response) => res.status(200).send('OK'));

app.use('/api/form', formRouter);
app.use('/api/webhook', webhookRouter);

app.use((req, res) => {
  res.sendFile(path.join(client, 'index.html'));
});

// webhook setup
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`\n\n[server]: 🟢🟢 Server is running at \u001b]8;;${url}\u001b\\${url}\u001b]8;;\u001b\\ 🟢🟢`);
});
