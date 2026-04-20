"use client";

import Link from "next/link";
import Button from "@/components/ui/button/button";
import { useLogin } from "@/features/auth/use-login"; // Import the useLogin hook to handle the form logic for user login, including managing form state, validation, and submission logic
import ErrorText from "@/components/ui/text/error-text"; // Import the ErrorText component to display validation error messages for the form fields, which will be conditionally rendered based on the formik state for each field (touched and errors)

export default function LoginForm() {
  const { formik, isLoading } = useLogin(); // Use the useLogin hook to get the formik object for managing form state and validation, and the isLoading state for managing the loading state of the form submission

  return (
    <div className="w-full flex justify-center">
      <div className="space-y-4 w-100">
        <form onSubmit={formik.handleSubmit}>
          {" "}
          {/* Render a form element with an onSubmit handler that calls formik.handleSubmit to handle form submission */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="text"
              name="email"
              onChange={formik.handleChange} // Set the onChange handler to formik.handleChange to update the form state when the input value changes
              onBlur={formik.handleBlur} // Set the onBlur handler to formik.handleBlur to trigger validation when the input loses focus
              value={formik.values.email} // Set the value of the input to formik.values.email to bind the input value to the form state
              className="w-full mt-1 p-1 border rounded"
              placeholder="Enter email..."
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorText message={formik.errors.email} />
            )}{" "}
            {/* Conditionally render the ErrorText component to display the validation error message for the email field if it has been touched and has an error */}
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange} // Set the onChange handler to formik.handleChange to update the form state when the input value changes
              onBlur={formik.handleBlur} // Set the onBlur handler to formik.handleBlur to trigger validation when the input loses focus
              value={formik.values.password} // Set the value of the input to formik.values.password to bind the input value to the form state
              className="w-full mt-1 p-1 border rounded"
              placeholder="Enter password..."
            />
            {formik.touched.password && formik.errors.password && (
              <ErrorText message={formik.errors.password} />
            )}{" "}
            {/* Conditionally render the ErrorText component to display the validation error message for the password field if it has been touched and has an error */}
          </div>
          <div className="flex justify-center gap-2 m-5">
            <Button type="submit" disabled={isLoading}>
              {" "}
              {/* Render a submit button that is disabled while the form submission is loading, and display "Loading..." text while loading and "Login" text when not loading */}
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
