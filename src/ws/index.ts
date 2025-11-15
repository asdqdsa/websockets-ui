import { WebSocketServer } from "ws";
import type { Server } from "http";
import type { WebSocketWithId } from "./type";
import { handleConnection } from "./connection";

export function createWsServer({ server }: { server: Server }) {
  const wss = new WebSocketServer({ server });

  console.log("WebSocket server is running");

  wss.on("connection", (ws) =>
    handleConnection(ws as unknown as WebSocketWithId),
  );

  return wss;
}
