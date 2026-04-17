"use server";
import { ICreateUserRequest, IUpdateUserRequest, IUser } from "@/types/user.types";
import { AxiosInstanceWithAuth, AxiosInstanceWithoutAuth } from "../axios-instance";

export const getUserList = async () => {
  try {
    const response = await AxiosInstanceWithoutAuth<IUser[]>({
      method: "GET",
      url: `/users`,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (Id: number) => {
  try {
    const response = await AxiosInstanceWithoutAuth<IUser>({
      method: "GET",
      url: `/users/${Id}`,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (body: ICreateUserRequest) => {
  try {
    const response = await AxiosInstanceWithoutAuth<IUser>({
      method: "POST",
      url: `/users`,
      data: body,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async ({
  Id,
  body,
}: {
  Id: number;
  body: IUpdateUserRequest;
}) => {
  try {
    const response = await AxiosInstanceWithoutAuth<IUser>({
      method: "PUT",
      url: `/users/${Id}`,
      data: body,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (Id: number) => {
  try {
    const response = await AxiosInstanceWithoutAuth<IUser>({
      method: "DELETE",
      url: `/users/${Id}`,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
