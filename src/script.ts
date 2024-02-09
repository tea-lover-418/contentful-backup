export const main = (spaceId?: string, accessToken?: string) => {
  if (!spaceId || !accessToken) {
    console.error("Missing required parameters space-id or access-token");
  }

  console.log(
    `starting script for ${spaceId} with access token ${accessToken}`
  );
};
