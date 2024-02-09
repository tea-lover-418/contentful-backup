import arg from "arg";
import { main } from "./script";

const args = arg({
  "--space-id": String,
  "--access-token": String,
  "--outdir": String,
});

main(args["--space-id"], args["--access-token"], args["--outdir"]);
