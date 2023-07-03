import User from "../../models/User";

export default async(req,res,next)=> {
    try {
        let one = await User.findOneAndUpdate(
            {email: req.body.email},
            {online: true},
            {new: true}
        )
        delete one.password
        return res.status(200).json({
            success:true,
            message:'user signed in!',
            response: {user: one}
        })
    } catch (error) {
        return next()
    }
}