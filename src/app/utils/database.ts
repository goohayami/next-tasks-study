import mongoose from "mongoose";

export const connectDb = async () => {
  console.log(process.env.DB_URI);
  const db_url =
    "mongodb+srv://hayami:metamask2jp@cluster0.vcjel.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  try {
    await mongoose.connect(db_url || "");
  } catch (error) {
    console.log("DB接続に失敗しました");
    throw new Error();
  }
};
