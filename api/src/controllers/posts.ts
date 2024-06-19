import { Request, Response } from "express";
import { PostsServices } from "../services/posts";
import { stopTimer } from "../utils/stopTimer";

export class PostsController {
  static createPost = async (req: Request, res: Response) => {
    const post = await PostsServices.createPost(req.body);

    return res.status(201).json(post);
  };

  static getPosts = async (_: Request, res: Response) => {
    const posts = await PostsServices.getPosts();
    const { startTime } = res.locals;
    return res.json({ responseTime: stopTimer(startTime), data: posts });
  };

  static getPostById = async (req: Request, res: Response) => {
    const posts = await PostsServices.getPostById(+req.params.id);

    const { startTime } = res.locals;
    return res.json({
      isCached: false,
      responseTime: stopTimer(startTime),
      data: posts,
    });
  };
}
