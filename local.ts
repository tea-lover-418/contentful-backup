import { main } from "./src";

main(
  process.env["CONTENTFUL_SPACE_ID"],
  process.env["CONTENTFUL_DELIVERY_API_TOKEN"]
);
