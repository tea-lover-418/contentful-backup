import { ContentfulClientApi, createClient } from "contentful";

export class ContentfulApi {
  client: ContentfulClientApi<any>;

  constructor(spaceId: string, accessToken: string) {
    this.client = createClient({
      space: spaceId,
      accessToken,
    });
  }

  async getModel() {
    return this.client.getContentTypes();
  }
}
