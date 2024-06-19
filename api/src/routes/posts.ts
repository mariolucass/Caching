import { Router } from "express";
import { PostsController } from "../controllers/posts";
import { validateSchema } from "../middlewares/body";
import { cacheMiddleware } from "../middlewares/cache";
import { startTime } from "../middlewares/startTime";
import { postCreateSchema } from "../schemas/posts";

export const postsRouter = Router();

postsRouter.get(
  "/",
  startTime,
  cacheMiddleware("allPosts"),
  PostsController.getPosts
);

postsRouter.get(
  "/:id",
  startTime,
  cacheMiddleware("id"),
  PostsController.getPostById
);

postsRouter.post(
  "/",
  validateSchema(postCreateSchema),
  PostsController.createPost
);
