import { body } from "express-validator";

const uservalidation=[
  body("email").isEmail().withMessage("this is not an valid email"),
  body("username").isLength(1).withMessage("Username must be 1 char lenght "),
  body("password").isLength(6).withMessage("The password must be length of atleast 6 charectors ")
 ];

 export default uservalidation;