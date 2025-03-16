# DocEase - Doctor Appointment Website (MERN Stack)

## Introduction
The Doctor Appointment Website is an online platform designed to facilitate seamless communication between patients and doctors. Patients can book appointments, while doctors can manage their schedules efficiently. This system is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Admin Credentials
- **Username:** admin@docease.com
- **Password:** DocEase1

## Live Links
- **Frontend Live Link:** [DocEase Frontend](https://docease-9fa26.web.app)
- **Backend Live Link:** [DocEase Backend](https://docease-server.vercel.app)

## Features & Functionalities

### User Roles
1. **Patient** - Can book and manage appointments.
2. **Doctor** - Can manage their schedules and approve/reject appointments.
3. **Admin** - Oversees the system and manages users.

### Patient Features
- User authentication (Sign up/Login via Firebase Authentication)
- Search for doctors by specialty, location, or availability
- Book and manage appointments
- View appointment history
- Provide ratings and reviews for doctors
- Receive email notifications for confirmed and upcoming appointments

### Doctor Features
- User authentication (Sign up/Login via Firebase Authentication)
- Manage profile (specialty, availability, experience, etc.)
- Approve or reject appointment requests
- View patient details and appointment history
- Set availability and manage schedules
- Receive notifications for new appointments or cancellations

### Admin Features
- Manage users (patients and doctors)
- Approve doctor registrations
- Monitor appointments and system analytics
- Generate reports on bookings and system performance
- Manage complaints and feedback

## Technology Stack
| Component       | Technology                       |
|----------------|-----------------------------------|
| Frontend       | React.js, Tailwind CSS            |
| Backend        | Node.js, Express.js               |
| Database       | MongoDB                           |
| Authentication | Firebase Authentication           |
| Notifications  | Twilio/Email API (Nodemailer)     |
| Deployment     | Vercel, MongoDB                   |

## System Flow
1. Users register and log in via Firebase Authentication.
2. Patients search for doctors and book an appointment.
3. Doctors manage their schedules and confirm appointments.
4. Admin oversees system operations and user activities.

## API Endpoints

### Patient Routes
- **GET** `/api/doctors` - Get list of available doctors
- **POST** `/api/appointments` - Book an appointment
- **GET** `/api/appointments` - View appointments
- **PUT** `/api/appointments/:id` - Cancel or reschedule an appointment
- **POST** `/api/reviews` - Submit a review for a doctor
- **GET** `/api/reviews/:doctorId` - Get reviews for a specific doctor

### Doctor Routes
- **GET** `/api/appointments` - View all appointments
- **PUT** `/api/appointments/:id/status` - Approve/Reject appointment
- **PUT** `/api/doctors/:id` - Update doctor profile information
- **GET** `/api/doctors/:id/appointments` - View appointments for a specific doctor

### Admin Routes
- **GET** `/api/users` - Manage users
- **GET** `/api/reports` - View system analytics
- **PUT** `/api/doctors/:id/approve` - Approve doctor registration
- **DELETE** `/api/users/:id` - Delete a user (doctor or patient)
- **GET** `/api/complaints` - View user complaints and feedback

## Non-Functional Requirements
- **Security:** Use Firebase Authentication for secure user sessions.
- **Performance:** Optimize database queries for fast response times.
- **Reliability:** Ensure minimal downtime with proper monitoring.

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/salmanfxrsi/docease-mern.git
   ```
2. Navigate to the project directory:
   ```sh
   cd docease-mern
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Configure environment variables for Firebase, Twilio, and MongoDB.


## Conclusion
This project provides a user-friendly and efficient online doctor appointment booking system, improving access to healthcare services.

