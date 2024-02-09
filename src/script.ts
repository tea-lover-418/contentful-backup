import { ContentfulApi } from "./contentful/client";
import { createDirIfNotExists, writeToFile } from "./file";

export const main = async (
  spaceId?: string,
  accessToken?: string,
  outdir: string = "exports"
) => {
  if (!spaceId || !accessToken) {
    console.error("Missing required parameters space-id or access-token");
    return;
  }

  console.log(
    `starting script for ${spaceId} with access token ${accessToken}`
  );

  /** Create the client we will be using. */
  const contentfulClient = new ContentfulApi(spaceId, accessToken);

  /** Retrieve the list of types. */
  const model = await contentfulClient.getModel();
  const contentTypeIds = model?.items?.map(({ sys }) => sys.id);

  console.log(`found content types: ${contentTypeIds.join(", ")}`);

  /** Ensure the output dir exists. */
  await createDirIfNotExists(outdir);

  /** Get content for all types, and write them to a file. */
  const responses = await Promise.all(
    contentTypeIds.map(async (contentTypeId) => {
      const entries = await contentfulClient.getEntriesForContentType(
        contentTypeId
      );

      const content = entries.items.map(({ fields }) => fields);
      const filePath = `${outdir}/${contentTypeId}.json`;

      await writeToFile(filePath, JSON.stringify(content));
    })
  );

  console.log(`finished exporting your contentful data.`);
};
