import { WebSocketServer } from "ws";
import { httpServer } from "../http_server";
import type { Server } from "http";

// export function handleConnection({ wss, socket }) {
//   wss.on("connection", (ws) => {
//     console.log("Client connected");

//     ws.on("message", (message) => {
//       console.log(`Received message: ${message}`);
//     });

//     ws.on("close", () => {
//       console.log("Client disconnected");
//     });
//   });
// }

export function createWsServer({ server }: { server: Server }) {
  const wss = new WebSocketServer({ server });
  // const wss = new WebSocketServer({ port });

  console.log("WebSocket server started");
  wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("message", (message) => {
      console.log(`Received message: ${message}`);
    });

    ws.on("close", () => {
      console.log("Client disconnected");
    });

    ws.send("Hello from WebSocket server!");
  });

  return wss;
}
