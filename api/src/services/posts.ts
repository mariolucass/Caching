import { prisma } from "../config/database";
import { postCache } from "../config/node-cache";
import { PostCreateInterface } from "../interfaces/posts";
import { postReturnSchema } from "../schemas/posts";

export class PostsServices {
  static createPost = async (body: PostCreateInterface) => {
    const post = await prisma.post.create({ data: body });

    return postReturnSchema.parse(post);
  };

  static getPosts = async () => {
    const posts = await prisma.post.findMany();

    postCache.set("allPosts", posts);

    return posts;
  };

  static getPostById = async (id: number) => {
    const post = await prisma.post.findFirst({ where: { id } });

    postCache.set(id, post);

    return post;
  };
}
