import { httpServer } from "./http_server";
import { config } from "./utils/config";

httpServer.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
