import bcrypt from "bcrypt";
import * as userService from "./user.service.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, role, isActive } = req.body;

    const user = await userService.createUser({
      name,
      email,
      password,
      role,
      isActive,
    });

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await userService.loginUser({ email, password });

    res.status(200).json({
      message: "Signin successful",
      ...result,
    });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json({ user });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
