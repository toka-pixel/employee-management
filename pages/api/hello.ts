// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "../../database/conn";
import connectMongo from '../../database/conn'

export default async function handler(req, res) {

  connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection"}))
  // const client = await clientPromise;
  // const db = client.db("cluster0");

  // switch (req.method) {
  //   case "POST":
  //     let bodyObject = JSON.parse(req.body);
  //     let myPost = await db.collection("posts").insertOne(bodyObject);
  //     res.json(myPost.ops[0]);
  //     break;
  //   case "GET":
  //     const allPosts = await db.collection("allPosts").find({}).toArray();
  //     res.json({ status: 200, data: allPosts });
  //     break;
  // }

  res.status(200).json({ name: 'John Doe' })
}
