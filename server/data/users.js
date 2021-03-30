// Sample data for users - bcryptjs authentication example and admin rights
// We don't need to use this hash method

import bcrypt from 'bcryptjs';

const users = [
  {
    firstName: "Travis",
    lastName: "Orback",
    email: "travis@cathardware.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true
  },
  {
    firstName: "Porter",
    lastName: "Orback",
    email: "porter@orback.com",
    password: bcrypt.hashSync("123456", 10)
  },
  {
    firstName: "Astrid",
    lastName: "Orback",
    email: "astrid@orback.com",
    password: bcrypt.hashSync("123456", 10)
  }
];

export default users;