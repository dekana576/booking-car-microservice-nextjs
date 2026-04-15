
import DetailUserPage from "@/components/pages/user/detail-user-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detail User | OTW TL",
};

export default function DetailUser() {
  return <DetailUserPage />;
}
