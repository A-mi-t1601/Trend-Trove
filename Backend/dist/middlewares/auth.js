import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "./error.js";
//Middleware To Make Sure Only Admin Is Allowed
export const adminOnly = TryCatch(async (req, res, next) => {
    const { id } = req.query;
    if (!id)
        return next(new ErrorHandler("Make Sure You're Login With Registered Details", 401));
    const user = await User.findById(id);
    if (!user)
        return next(new ErrorHandler("User Not Registered With This ID", 401));
    if (user.role !== "admin")
        return next(new ErrorHandler("You're Not Admin", 401));
    next();
});
