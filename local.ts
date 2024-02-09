import { main } from "./src/script";
import "dotenv/config";

main(
  process.env["CONTENTFUL_SPACE_ID"],
  process.env["CONTENTFUL_DELIVERY_API_TOKEN"]
);
