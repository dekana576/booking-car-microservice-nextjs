"use client";
import Button from "@/components/ui/button/button";
import ErrorText from "@/components/ui/text/error-text"; //Import the ErrorText component to display validation error messages for the form fields
import { useUpdateUser } from "@/features/admin/use-update-user"; //Import the useUpdateUser hook to handle the form logic for updating an existing user
import {
  USER_ROLE_OPTIONS,
} from "@/libs/constant/options"; //Import the USER_ROLE_OPTIONS constant to populate the options for the user role select field in the form
import { IUser } from "@/types/user.types"; //Import the IUser interface to define the shape of the user object being passed as a prop to the EditUserForm component

// Define the props for the EditUserForm component, which includes a user object of type IUser
interface IEditUserFormProps {
  user: IUser;
}

export default function EditUserForm({ user }: IEditUserFormProps) { //Destructure the user prop to access its properties within the component
  const { formik, isLoading } = useUpdateUser(user); //Use the useUpdateUser hook, passing the user object as an argument, to get the formik object for managing form state and validation, and the isLoading state for managing the loading state of the form submission

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white space-y-2"> {/* Render a form element with an onSubmit handler that calls formik.handleSubmit, and apply styling classes for layout and spacing */}
      <div>
        <label className="text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange} //Set the onChange handler to formik.handleChange to update the form state when the input value changes
          value={formik.values.name} //Set the value of the input to formik.values.name to bind the input value to the form state
          className="w-full mt-1 p-1 border rounded"
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
          onChange={formik.handleChange} //Set the onChange handler to formik.handleChange to update the form state when the input value changes
          value={formik.values.email} //Set the value of the input to formik.values.email to bind the input value to the form state
          className="w-full mt-1 p-1 border rounded"
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
          onChange={formik.handleChange} //Set the onChange handler to formik.handleChange to update the form state when the input value changes
          value={formik.values.password || undefined} //Set the value of the input to formik.values.password to bind the input value to the form state, and use undefined as a fallback value to prevent React from treating it as an uncontrolled component when the password field is empty
          className="w-full mt-1 p-1 border rounded"
        />
        {formik.touched.password && formik.errors.password && (
          <ErrorText message={formik.errors.password} />
        )} {/* Conditionally render the ErrorText component to display the validation error message for the password field if it has been touched and has an error */}
      </div>
      <div>
        <label className="text-sm font-medium">Phone</label>
        <input
          type="text"
          name="phone"
          onChange={formik.handleChange} //Set the onChange handler to formik.handleChange to update the form state when the input value changes
          value={formik.values.phone} //Set the value of the input to formik.values.phone to bind the input value to the form state
          className="w-full mt-1 p-1 border rounded"
        />
        {formik.touched.phone && formik.errors.phone && (
          <ErrorText message={formik.errors.phone} />
        )} {/* Conditionally render the ErrorText component to display the validation error message for the phone field if it has been touched and has an error */}
      </div>

      <div>
        <label className="text-sm font-medium">Role</label>
        <select
          name="role"
          onChange={formik.handleChange} //Set the onChange handler to formik.handleChange to update the form state when the select value changes
          value={formik.values.role} //Set the value of the select to formik.values.role to bind the select value to the form state
          className="w-full mt-1 p-1.5 border rounded"
        >
          {USER_ROLE_OPTIONS.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))} {/* Map over the USER_ROLE_OPTIONS array to render option elements for each user role, setting the key and value of each option to the role value */}
        </select>
      </div>


      <div className="flex justify-end gap-2">
        <Button type="submit" disabled={isLoading}> {/* Render a submit button that is disabled while the form submission is loading, and display "Updating..." text while loading and "Update" text when not loading */}
          {isLoading ? "Updating..." : "Update"}
        </Button>
      </div>
    </form>
  );
}
