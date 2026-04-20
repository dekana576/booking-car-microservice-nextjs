import Button from "@/components/ui/button/button";
import Link from "next/link";
import {useDeleteUser} from "@/features/admin/use-delete-user";   //Import the useDeleteUser hook to handle user deletion logic
import {IUser} from "@/types/user.types";   //Import the IUser interface to define the shape of the user object being passed as a prop

// Define the props for the UserCard component, which includes a user object of type IUser
interface IUserCardProps {
    user: IUser;
}

export default function UserCard({user} : IUserCardProps) { //Destructure the user prop to access its properties within the component
  const { handleDelete, isLoading} = useDeleteUser(); //Use the useDeleteUser hook to get the handleDelete function and isLoading state for managing user deletion and loading state
    return (
        <div className="border p-4 rounded-lg flex justify-between items-start w-full">
      <div>
        <p className="font-semibold">{user.name}</p> {/* Display the user's name */}
        <p className="text-sm">Phone: {user.phone}</p> {/* Display the user's phone number */}
        <p className="text-sm">Email: {user.email}</p> {/* Display the user's email */}
        <p className="text-sm">Role: {user.role}</p> {/* Display the user's role */}
      </div>

      <div className="flex gap-2">
        <Link href={`/admin/user/${user.id}`}> {/* Link to the user detail page using the user's ID */}
          <Button className="bg-orange-500 text-xs">Detail</Button>
        </Link>
        <Link href={`/admin/edit/${user.id}`}> {/* Link to the user edit page using the user's ID */}
          <Button className="bg-green-600 text-xs">Edit</Button>
        </Link>
        <Button
          className="bg-red-500 text-xs"
          onClick={() => confirm("Are you sure?") && handleDelete(user.id)} //Call the handleDelete function with the user's ID when the delete button is clicked, after confirming the action with the user 
          disabled={isLoading} //Disable the delete button while the deletion process is loading to prevent multiple clicks
        >
          Delete
        </Button>
      </div>
    </div>
    )
}