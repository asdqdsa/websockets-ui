import type { WebSocketWithId } from "./type";

export function send({
  ws,
  payload,
}: {
  ws: WebSocketWithId;
  payload: {
    type: string;
    id: string | null;
    data: string;
  };
}) {
  const msg = JSON.stringify(payload);
  ws.send(msg);
  console.log(`Sent message: ${msg}`);
}
