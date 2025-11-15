import type { WebSocket } from "ws";

export interface WebSocketWithId extends WebSocket {
  id: string;
}
