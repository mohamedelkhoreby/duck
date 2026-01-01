import User from "../../db/model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const createUser = async ({ name, email, password }) => {
  // 1️⃣ check if email exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Email already in use");
  }

  // 2️⃣ hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3️⃣ create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
};

/**
 * Login user
 */
export const loginUser = async ({ email, password }) => {
  // لازم نجيب password يدوي
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};

export const getUserById = async (userId) => {
  const user = await User.findById(userId);

  if (!user || !user.isActive) {
    throw new Error("User not found");
  }

  return user;
};
