import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "boo",
  accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN || "boo",
});
