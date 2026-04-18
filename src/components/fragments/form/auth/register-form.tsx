"use client";
import Button from "@/components/ui/button/button";
import ErrorText from "@/components/ui/text/error-text";
import { useRegister } from "@/features/auth/use-register";
import { USER_ROLE_OPTIONS } from "@/libs/constant/options";
import Link from "next/link";

export default function RegisterForm() {
  const { formik, isLoading } = useRegister();

  return (
    <div className="w-full flex justify-center">
      <div className="bg-white space-y-2 w-100">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="w-full mt-1 p-1 border rounded"
              placeholder="Enter user name..."
            />
            {formik.touched.name && formik.errors.name && (
              <ErrorText message={formik.errors.name} />
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="text"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full mt-1 p-1 border rounded"
              placeholder="Enter user email..."
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorText message={formik.errors.email} />
            )}
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="w-full mt-1 p-1 border rounded"
              placeholder="Enter user password..."
            />
            {formik.touched.password && formik.errors.password && (
              <ErrorText message={formik.errors.password} />
            )}
          </div>
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              className="w-full mt-1 p-1 border rounded"
              placeholder="Enter user phone number..."
            />
            {formik.touched.phone && formik.errors.phone && (
              <ErrorText message={formik.errors.phone} />
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Role</label>
            <select
              name="role"
              onChange={formik.handleChange}
              value={formik.values.role}
              className="w-full mt-1 p-1.5 border rounded"
            >
              {USER_ROLE_OPTIONS.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end p-5 gap-2">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Create..." : "Create"}
            </Button>
          </div>
        </form>
        <div className="py-2 text-end">
          <Link href="/login" className="text-sm text-blue-500 hover:underline">
            Already have an account? Login here
          </Link>
        </div>
      </div>
    </div>
  );
}
