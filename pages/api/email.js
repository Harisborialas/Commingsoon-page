// const nodemailer = require("nodemailer");
// import connectDB from "./utils/connectDB";
// import User from "@/models/User";

// connectDB();

// export default async function handler(
//   req,
//   res
// ) {
//   if (req.method === "POST") {
//     const { email } = req.body;

//     try {
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: "haris@borialas.com",
//           pass: "mmgwcflknqybfqed",
//         },
//       });

//       const mailOptions = {
//         from: "haris@borialas.com",
//         to: email,
//         subject: "Invoice from EZILine",
//         html: `
//             <h5>Email : ${email}</h5>
//             `,
//       };

//       transporter.sendMail(mailOptions, async (error, info) => {
//         if (error) {
//           console.log("Error: " + error);
//           res.status(500).json({ error: "Internal Server Error" });
//         } else {
//           console.log("Email sent: " + info.response);

//           const user = new User({ email });
//           await user.save();

//           res.status(201).json({ message: "Successfully saved data." });
//         }
//       });
//     } catch (error) {
//       console.log("Error: " + error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// }
