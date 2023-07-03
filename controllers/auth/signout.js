import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        let one = await User.findOneAndUpdate(
            { email:req.user.email },
            { online: false },
            { new: true }
        )
    }
}