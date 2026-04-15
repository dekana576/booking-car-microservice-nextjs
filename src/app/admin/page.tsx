import ListUserPage from "@/components/pages/user/list-user-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "List User | User Management",
};

export default function User() {
  return <ListUserPage />;
}
