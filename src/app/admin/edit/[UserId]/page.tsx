
import EditUserPage from "@/components/pages/user/edit-user-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit User | User Management",
};

export default function EditUser() {
  return <EditUserPage />;
}
