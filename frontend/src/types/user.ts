
export type User = {
  id: number;
  documentID: string;
  username: string;
  email: string;
  phone?: string;
  address?: string;
  avatar?: any;
};

export type Tab = "info" | "password" | "posts" | "create";
 