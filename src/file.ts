import fs from "node:fs/promises";

export const writeToFile = async (filename: string, content: string) => {
  try {
    await fs.writeFile(filename, content);
  } catch (err) {
    console.log(err);
  }
};

export const createDirIfNotExists = async (dir: string) => {
  await fs.mkdir(dir, { recursive: true });
};
