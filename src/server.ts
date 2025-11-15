import { httpServer } from "./http_server";
import { config } from "./utils/config";
import { createWsServer } from "./ws";

createWsServer({ server: httpServer });

httpServer.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
