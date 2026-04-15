

export default function UserDetailCard() {
    return (

        <div className="w-full border rounded-lg p-6 bg-white shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">User Name</h3>
          <p className="text-sm text-gray-500">ID: User ID</p>
        </div>

        <span
          className="px-3 py-1 text-sm rounded-full font-medium"
        >
          AVAILABLE
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Phone Number</p>
          <p className="font-medium">User Phone Number</p>
        </div>

        <div>
          <p className="text-gray-500">Vehicle Type</p>
          <p className="font-medium">Vehicle Type</p>
        </div>

        <div>
          <p className="text-gray-500">Plate Number</p>
          <p className="font-medium">Plate Number</p>
        </div>

        <div>
          <p className="text-gray-500">Current Location</p>
          <p className="font-medium">Current LOcation</p>
        </div>

        <div>
          <p className="text-gray-500">Rating</p>
          <p className="font-medium">Rating ⭐</p>
        </div>
      </div>

      <div className="border-t pt-4 text-xs text-gray-500 space-y-1">
        <p>Created At: </p>
        <p>Updated At: </p>
      </div>
    </div>
    )
}