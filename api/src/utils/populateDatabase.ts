import { prisma } from "../config/database";
import data from "../data/defaultPosts.json";

export const populateDatabase = async () => {
  const posts = await prisma.post.findMany();

  if (posts.length < 15) {
    await prisma.post.createMany({ data: data });
  }
};
