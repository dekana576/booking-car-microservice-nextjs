"use client";
import Button from "@/components/ui/button/button";
import ErrorText from "@/components/ui/text/error-text";
import { useCreateUser } from "@/features/user/use-create-user";
import {
  USER_ROLE_OPTIONS,
} from "@/libs/constant/options";

export default function CreateUserForm() {
  const { formik, isLoading } = useCreateUser();

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white space-y-2">
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

      <div className="flex justify-end gap-2">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Create..." : "Create"}
        </Button>
      </div>
    </form>
  );
}
