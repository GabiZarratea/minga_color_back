import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    const { email, password, photo } = req.body;
    const firebaseUrl = req.file ? req.file.firebaseUrl : null;
    // console.log(firebaseUrl, "firebaseurlregisteeeeeeeeeeeeeeeeeeeeeeeeeeer");

    const newUser = {
      email,
      password,
      // photo,
      photo: firebaseUrl,
    };

    const createdUser = await User.create(newUser);

    return res.status(201).json({ response: createdUser, success: true, message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};
