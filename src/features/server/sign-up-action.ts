"use server";

import db from "@/services/database";
import { SignUpData, signupSchema } from "../auth/schemas/sign-up-schema";
import bcrypt from "bcryptjs";

export async function signUpAction(data: SignUpData) {
  signupSchema.parse(data);

  try {
    const existingUser = await db.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      return {
        success: false,
        error: "Este email já está em uso",
      };
    }
    const hashedPassword = await bcrypt.hash(data.password, 12);

    await db.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Erro interno do servidor",
    };
  }
}
