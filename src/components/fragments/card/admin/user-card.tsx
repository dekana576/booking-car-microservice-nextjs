import Button from "@/components/ui/button/button";
import Link from "next/link";
import {useDeleteUser} from "@/features/admin/use-delete-user";
import {IUser} from "@/types/user.types";

interface IUserCardProps {
    user: IUser;
}

export default function UserCard({user} : IUserCardProps) {
  const { handleDelete, isLoading} = useDeleteUser();
    return (
        <div className="border p-4 rounded-lg flex justify-between items-start w-full">
      <div>
        <p className="font-semibold">{user.name}</p>
        <p className="text-sm">Phone: {user.phone}</p>
        <p className="text-sm">Email: {user.email}</p>
        <p className="text-sm">Role: {user.role}</p>
      </div>

      <div className="flex gap-2">
        <Link href={`/admin/user/${user.id}`}>
          <Button className="bg-orange-500 text-xs">Detail</Button>
        </Link>
        <Link href={`/admin/edit/${user.id}`}>
          <Button className="bg-green-600 text-xs">Edit</Button>
        </Link>
        <Button
          className="bg-red-500 text-xs"
          onClick={() => confirm("Are you sure?") && handleDelete(user.id)}
          disabled={isLoading}
        >
          Delete
        </Button>
      </div>
    </div>
    )
}