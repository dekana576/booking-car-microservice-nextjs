"use client";
import Link from "next/link";
import Button from "../ui/button/button";

export default function HomePage() {
  return (
    <div className="w-full flex justify-center">

    <div className="space-y-4 w-100">
      <form action="">
        <h2 className="font-bold text-lg text-center">Hello User, Welcome!</h2>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="text"
            name="email"
            className="w-full mt-1 p-1 border rounded"
            placeholder="Enter driver email..."
          />
        </div>
        <div>
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="w-full mt-1 p-1 border rounded"
            placeholder="Enter driver password..."
          />
        </div>
        <div className="flex justify-center gap-2 m-5">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
    </div>
  );
}
