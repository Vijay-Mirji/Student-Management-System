const adminDetails = require("./models/Admin/details.model.js");
const adminCredential = require("./models/Admin/credential.model.js");
const connectToMongo = require("./database/db.js");
const mongoose = require("mongoose");

const seedData = async () => {
    try {
        await connectToMongo();

        await adminCredential.deleteMany({})
        await adminDetails.deleteMany({})

        await adminCredential.create({
            loginid: 100,
            password: "password"
        });

        const adminDetail = {
            employeeId: "100",
            firstName: "John",
            middleName: "R",
            lastName: "Doe",
            email: "johndoe@mail.com",
            phoneNumber: "9876543210",
            gender: "Male",
            type: "Admin",
            profile: "Faculty_Profile_100.jpg",
        };

        await adminDetails.create(adminDetail);

        console.log("Seeding completed successfully!");
    } catch (error) {
        console.error("Error while seeding:", error);
    } finally {
        await mongoose.connection.close();
        process.exit();
    }
};

seedData();
