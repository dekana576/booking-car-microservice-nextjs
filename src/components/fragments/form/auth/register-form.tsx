"use client";
import Button from "@/components/ui/button/button";
import ErrorText from "@/components/ui/text/error-text"; // Import the ErrorText component to display validation error messages
import { useRegister } from "@/features/auth/use-register"; // Import the useRegister hook to handle the form logic for user registration
import { USER_ROLE_OPTIONS } from "@/libs/constant/options"; // Import the USER_ROLE_OPTIONS constant to populate the options for the user role select field in the form
import Link from "next/link";

export default function RegisterForm() {
  const { formik, isLoading } = useRegister(); // Use the useRegister hook to get the formik object for managing form state and validation, and the isLoading state for managing the loading state of the form submission

  return (
    <div className="w-full flex justify-center">
      <div className="bg-white space-y-2 w-100">
        <form onSubmit={formik.handleSubmit}> {/* Render a form element with an onSubmit handler that calls formik.handleSubmit */}
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange} // Set the onChange handler to formik.handleChange to update the form state when the input value changes
              value={formik.values.name} // Set the value of the input to formik.values.name to bind the input value to the form state
              className="w-full mt-1 p-1 border rounded"
              placeholder="Enter user name..."
            />
            {formik.touched.name && formik.errors.name && (
              <ErrorText message={formik.errors.name} />
            )} {/* Conditionally render the ErrorText component to display the validation error message for the name field if it has been touched and has an error */}
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="text"
              name="email"
              onChange={formik.handleChange} // Set the onChange handler to formik.handleChange to update the form state when the input value changes
              value={formik.values.email} // Set the value of the input to formik.values.email to bind the input value to the form state
              className="w-full mt-1 p-1 border rounded"
              placeholder="Enter user email..."
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorText message={formik.errors.email} />
            )} {/* Conditionally render the ErrorText component to display the validation error message for the email field if it has been touched and has an error */}
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange} // Set the onChange handler to formik.handleChange to update the form state when the input value changes
              value={formik.values.password} // Set the value of the input to formik.values.password to bind the input value to the form state
              className="w-full mt-1 p-1 border rounded"
              placeholder="Enter user password..."
            />
            {formik.touched.password && formik.errors.password && (
              <ErrorText message={formik.errors.password} />
            )} {/* Conditionally render the ErrorText component to display the validation error message for the password field if it has been touched and has an error */}
          </div>
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              onChange={formik.handleChange} // Set the onChange handler to formik.handleChange to update the form state when the input value changes
              value={formik.values.phone} // Set the value of the input to formik.values.phone to bind the input value to the form state
              className="w-full mt-1 p-1 border rounded"
              placeholder="Enter user phone number..."
            />
            {formik.touched.phone && formik.errors.phone && (
              <ErrorText message={formik.errors.phone} />
            )} {/* Conditionally render the ErrorText component to display the validation error message for the phone field if it has been touched and has an error */}
          </div>

          <div>
            <label className="text-sm font-medium">Role</label>
            <select
              name="role"
              onChange={formik.handleChange} // Set the onChange handler to formik.handleChange to update the form state when the select value changes
              value={formik.values.role} // Set the value of the select to formik.values.role to bind the select value to the form state
              className="w-full mt-1 p-1.5 border rounded"
            >
              {USER_ROLE_OPTIONS.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))} {/* Map through the USER_ROLE_OPTIONS array to render an option element for each user role, setting the key and value of each option to the role string, and displaying the role string as the option text */}
            </select>
          </div>

          <div className="flex justify-end p-5 gap-2">
            <Button type="submit" disabled={isLoading}> {/* Render a submit button that is disabled while the form submission is loading, and display "Create..." text while loading and "Create" text when not loading */}
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
