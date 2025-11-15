import type { RawData } from "ws";
import type { WebSocketWithId } from "./type";
import { send } from "./send";

export function handleIncomingMessage(ws: WebSocketWithId, raw: RawData) {
  let msg;

  try {
    msg = JSON.parse(raw.toString());
    console.log("Received message: ", raw.toString());
  } catch {
    send({
      ws,
      payload: {
        type: "error",
        id: ws.id,
        data: "Invalid JSON format",
      },
    });
    return;
  }

  if (msg.type === "ping") {
    send({
      ws,
      payload: { type: "pong", id: ws.id, data: "Pong!" },
    });
    return;
  }

  send({
    ws,
    payload: {
      type: "error",
      id: null,
      data: `Received unknown type: ${msg.type}, try "ping"`,
    },
  });
  return;
}
