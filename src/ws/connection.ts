import type { WebSocketWithId } from "./type";

export function handleConnection(ws: WebSocketWithId) {
  ws.id = crypto.randomUUID();

  ws.on("message", (raw) => {
    console.log("Received message: ", raw.toString());
  });

  ws.on("close", () => {
    console.log("Client disconnected: ", ws.id);
  });
}
