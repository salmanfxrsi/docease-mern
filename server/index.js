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
  const appointmentCollection = client.db("docease").collection("appointments");

  try {
    // Get users
    app.get("/users", async (req, res) => {
      try {
        const users = await userCollection
          .find()
          .sort({ createdAt: -1 })
          .toArray();
        res.status(200).send({ success: true, data: users });
      } catch (error) {
        console.error("Error fetching users", error);
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }
    });

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
          createdAt: Date.now(),
        });

        res.json(result);
      } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    });

    // Change role of a specific user
    app.patch("/users/role/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const { role } = req.body;

        // Validate ObjectId
        if (!ObjectId.isValid(id)) {
          return res.status(400).json({ error: "Invalid user ID format" });
        }

        // Validate role
        if (!role) {
          return res.status(400).json({ error: "Role is required" });
        }

        const query = { _id: new ObjectId(id) };
        const updateRole = {
          $set: { role },
        };

        const result = await userCollection.updateOne(query, updateRole);

        if (result.matchedCount === 0) {
          return res.status(404).json({ error: "User not found" });
        }

        res.json({ message: "User role updated successfully", result });
      } catch (error) {
        console.error("Error updating user role:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    // Get specific user by email
    app.get("/users/:email", async (req, res) => {
      try {
        const email = req.params.email;
        if (!email) {
          return res
            .status(400)
            .json({ success: false, message: "Email is required" });
        }

        const user = await userCollection.findOne({ email });

        if (!user) {
          return res
            .status(404)
            .json({ success: false, message: "User not found" });
        }

        res.json({ success: true, user: user });
      } catch (error) {
        console.error("Error fetching user role:", error);
        res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }
    });

    // Post appointment
    app.post("/appointments", async (req, res) => {
      try {
        const appointment = req.body;
        const result = await appointmentCollection.insertOne(appointment);

        res.status(201).json({
          success: true,
          message: "Appointment created successfully!",
          data: result,
        });
      } catch (error) {
        console.error("Error creating appointment:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error",
          error: error.message,
        });
      }
    });

    // POST a doctor
    app.post("/doctors", async (req, res) => {
      try {
        const doctorInfo = req.body;
        const response = await doctorCollection.insertOne(doctorInfo);

        if (response.acknowledged) {
          return res
            .status(201)
            .json({
              message: "Request send successfully",
              doctorId: response.insertedId,
            });
        } else {
          return res.status(500).json({ message: "Failed to add doctor" });
        }
      } catch (error) {
        console.error("Error adding doctor:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    });

    app.patch("/doctors/manage-request/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const { status, userId } = req.query;
    
        if (!id || !status) {
          return res.status(400).json({ error: "Missing required parameters." });
        }
    
        const doctorQuery = { _id: new ObjectId(id) };
        const updateStatus = { $set: { status } };
    
        const response = await doctorCollection.updateOne(doctorQuery, updateStatus);
    
        if (status === "accepted" && userId) {
          const userQuery = { _id: new ObjectId(userId) };
          const updateRole = { $set: { role: "doctor" } };
          await userCollection.updateOne(userQuery, updateRole);
        }
    
        res.json(response);
      } catch (error) {
        console.error("Error updating doctor request:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
    

    // Get pending doctors
    app.get("/doctors/pending", async (req, res) => {
      const doctors = await doctorCollection
        .find({ status: "pending" })
        .toArray();
      res.send(doctors);
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
