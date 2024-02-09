import { ContentfulApi } from "./contentful/client";

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

  const contentfulClient = new ContentfulApi(spaceId, accessToken);

  const model = await contentfulClient.getModel();
  const contentTypeIds = model?.items?.map(({ sys }) => sys.id);

  console.log(`found content types: ${contentTypeIds.join(", ")}`);
};
