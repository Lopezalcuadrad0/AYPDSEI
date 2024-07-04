import { GraphQLError } from "graphql";
import { RegisterModel } from "../DB/register.ts";

export const Query = {
  getRegisters: async () => {
    try {
      const registers = await RegisterModel.find();
      return registers;
    } catch (err) {
      console.log(err);
      throw new GraphQLError(err.message);
    }
  },
  getRegister: async (_: unknown, args: { id: string }) => {
    try {
      const register = await RegisterModel.findById(args.id);
      if (!register) {
        throw new GraphQLError("Register not found");
      }
      return register;
    } catch (err) {
      console.log(err);
      throw new GraphQLError(err.message);
    }
  },
};