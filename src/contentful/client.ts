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

  async getEntriesForContentType(contentType: string) {
    return this.client.getEntries({
      content_type: contentType,
    });
  }
}
