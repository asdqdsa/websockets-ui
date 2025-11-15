export function send({
  ws,
  payload,
}: {
  ws: WebSocket;
  payload: Record<string, any>;
}) {
  const msg = JSON.stringify(payload);
  ws.send(msg);
  console.log(`Sent message: ${msg}`);
}
