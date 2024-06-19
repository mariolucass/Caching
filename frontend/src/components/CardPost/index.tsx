import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PostInterface {
  title: string;
  content: string;
}

interface CardPostProps {
  post: PostInterface;
}

export const CardPost = ({ post }: CardPostProps) => (
  <Card className="w-[350px] h-[126px]">
    <CardHeader>
      <CardTitle>{post.title}</CardTitle>
      <CardDescription>{post.content}</CardDescription>
    </CardHeader>
  </Card>
);
