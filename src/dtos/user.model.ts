export type UserRole = "ADMIN" | "MANAGER";
export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};
