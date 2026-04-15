import Button from "@/components/ui/button/button";
import Link from "next/link";


export default function UserCard() {
    return (
        <div className="border p-4 rounded-lg flex justify-between items-start w-full">
      <div>
        <p className="font-semibold">User Name</p>
        <p className="text-sm">Phone: User Phone Number</p>
        <p className="text-sm">Plate: Plate Number</p>
        <p className="text-sm">Status: AVAILABLE</p>
      </div>

      <div className="flex gap-2">
        <Link href={"/admin/1"}>
          <Button className="bg-orange-500 text-xs">Detail</Button>
        </Link>
        <Link href={"/admin/edit/1"}>
          <Button className="bg-green-600 text-xs">Edit</Button>
        </Link>
        <Button
          className="bg-red-500 text-xs"
        >
          Delete
        </Button>
      </div>
    </div>
    )
}