import type { WebSocketWithId } from "./type";
import { handleIncomingMessage } from "./message";

export function handleConnection(ws: WebSocketWithId) {
  ws.id = crypto.randomUUID();

  ws.on("message", (raw) => {
    console.log("Received message: ", raw.toString());
    handleIncomingMessage(ws, raw);
  });

  ws.on("close", () => {
    console.log("Client disconnected: ", ws.id);
  });
}
