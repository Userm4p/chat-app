import dotenv from "dotenv";

dotenv.config();

export default {
  DB_URI: process.env.DB_URI,
  PORT: process.env.PORT,
  SALT: process.env.SALT,
  SECRET: process.env.SECRET,
  JWT: process.env.JWT,
};
