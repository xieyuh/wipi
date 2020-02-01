interface IFile {
  id: string;
  originalname: string;
  filename: string;
  type: string;
  size: number;
  url: string;
  createAt: string;
}

interface IArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  cover?: string;
  html: string;
  toc: string;
  views: number;
  tags?: [any];
  password?: string; // 访问密码
  isCommentable?: boolean; // 是否可评论
  createAt: string;
  publishAt: string;
}

interface ITag {
  id: string;
  label: string;
  icon: string;
  articles?: IArticle[];
}

interface IComment {
  id: string;
  articleId: string;
  parentCommentId: string;
  contact: string;
  content: string;
  html: string;
  pass: boolean;
  createAt: string;
  article?: IArticle;
}