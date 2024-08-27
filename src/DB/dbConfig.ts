import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    //handle success
    connection.on("connected", () => {
      console.log("Database connected successfully");
    });

    // handle error
    connection.on("error", (error) => {
      console.log("Error while connecting to DB" + error);
      process.exit();
    });
  } catch (error) {
    console.log("Something goes wrong while connecting to DB" + error);
  }
}
