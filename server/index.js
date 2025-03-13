require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.upkox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  const doctorCollection = client.db("docease").collection("doctors");
  const userCollection = client.db("docease").collection("users");

  try {
    // Post users
    app.post("/users", async (req, res) => {
      try {
        const { email, ...userData } = req.body;

        // Check if the user already exists
        const existingUser = await userCollection.findOne({ email });

        if (existingUser) {
          return res.json(existingUser);
        }

        // Insert new user
        const result = await userCollection.insertOne({
          email,
          ...userData,
          timestamp: Date.now(),
        });

        res.json(result);
      } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    });

    // Get all doctors
    app.get("/doctors", async (req, res) => {
      try {
        const { specialty, availability, search } = req.query;

        const query = { status: "accepted" };

        if (specialty) query.specialty = specialty;
        if (availability) query.availability = availability;
        if (search) {
          query.location = { $regex: search, $options: "i" };
        }

        const doctors = await doctorCollection.find(query).toArray();
        res.status(200).json(doctors);
      } catch (error) {
        res
          .status(500)
          .json({ message: "Failed to fetch doctors", error: error.message });
      }
    });

    // Get specific doctor by id
    app.get("/doctors/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };

        const doctor = await doctorCollection.findOne(query);
        res.status(200).json(doctor);
      } catch (error) {
        res
          .status(500)
          .json({ message: "Failed to fetch doctor", error: error.message });
      }
    });

    // await client.connect();
    // await client.db("admin").command({ ping: 1 });

    console.log("Pinged your deployment. Successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

// Routes
app.get("/", (req, res) => {
  res.send("DocEase server is running");
});

// Start Server
app.listen(port, () => {
  console.log(`DocEase server is running on PORT ${port}`);
});
