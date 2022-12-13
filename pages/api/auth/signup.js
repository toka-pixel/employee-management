import { hash } from 'bcryptjs';
import connectMongo from "../../../database/conn";
//import type { NextApiRequest, NextApiResponse } from "next";
import AuthUsers from "../../../model/authUsers";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  if (req.method === "POST") {
  
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data" ,status:404 });
    const { username, email, password } = req.body;

    const checkExisting = await AuthUsers.findOne({ email });
  

    if (checkExisting) {
      return res.status(422).json({ message: "User Already Exists...!" ,status:422});
    }

    AuthUsers.create(
      { username, email, password: password },
      function (err, data) {
        if (err) return res.status(404).json({ err ,status:404});
        res.status(201).json({ status: true, user: data ,status:201});
        
      }
    );
  } else {
    res
      .status(500)
      .json({ message: "HTTP method not valid only POST Accepted",status:500 });
  }

  res.json({ message: "Signup Post Request" ,status:201});
}
