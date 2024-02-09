import arg from "arg";

const args = arg({
  "--space-id": String,
  "--access-token": String,
});

export const main = async (spaceId?: string, accessToken?: string) => {
  if (!spaceId || !accessToken) {
    console.error("Missing required parameters space-id or access-token");
  }
};

main(args["--space-id"], args["--access-token"]);
