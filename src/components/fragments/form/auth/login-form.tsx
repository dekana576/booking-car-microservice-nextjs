"use client";

import Link from "next/link";
import Button from "@/components/ui/button/button";
import { useLogin } from "@/features/auth/use-login";

export default function LoginForm() {
  const { formik, isLoading } = useLogin();

  return (
    <div className="w-full flex justify-center">
      <div className="space-y-4 w-100">
        <form onSubmit={formik.handleSubmit}>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="text"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full mt-1 p-1 border rounded"
              placeholder="Enter email..."
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs">{formik.errors.email}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full mt-1 p-1 border rounded"
              placeholder="Enter password..."
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs">{formik.errors.password}</p>
            )}
          </div>

          {/* REGISTER LINK */}

          {/* BUTTON */}
          <div className="flex justify-center gap-2 m-5">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </div>
        </form>
        <div className="py-2 text-end">
          <Link
            href="/register"
            className="text-sm text-blue-500 hover:underline"
          >
            Don't have an account? Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
