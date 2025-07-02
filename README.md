
![Untitled diagram _ Mermaid Chart-2025-07-02-092435](https://github.com/user-attachments/assets/cfc6423f-e741-4ebb-9eb1-cea680c082ec)
# 🌴 The Wild Oasis

A full-stack hotel dashboard for managing cabins, bookings, and guests.  
Built for internal use by hotel staff, this app brings everything together—from guest data and check-ins to booking reports and cabin availability.

---

## 📸 Preview
![Screenshot 2025-07-02 142339](https://github.com/user-attachments/assets/4a7f30dd-bfb1-4ab3-8ca1-d68272a2c8a4)
![Screenshot 2025-07-02 142455](https://github.com/user-attachments/assets/9dfd36a1-fe8c-499d-91dd-daf93623fc89)
![Screenshot 2025-07-02 142600](https://github.com/user-attachments/assets/c64c3f8f-027e-480e-afc1-77a0808143a1)
![Screenshot 2025-07-02 142701](https://github.com/user-attachments/assets/6f0c3753-4176-4a72-bdf1-a06fe762d317)
![Screenshot 2025-07-02 142721](https://github.com/user-attachments/assets/c6319dc0-28a9-4352-a406-3b04639df3d1)
![Screenshot 2025-07-02 142953](https://github.com/user-attachments/assets/16eb96d6-11d6-48f3-9371-c82c94040703)
![Screenshot 2025-07-02 142922](https://github.com/user-attachments/assets/9c3d2ef2-c805-4369-953e-6fb9aa65503e)
![Screenshot 2025-07-02 143021](https://github.com/user-attachments/assets/2f3d7953-1ff0-4526-9846-f45b9225e47b)
![Screenshot 2025-07-02 143034](https://github.com/user-attachments/assets/4c6022cf-90f1-4932-b5db-d8a526d36368)


## 🛠 Tech Stack

| Layer     | Technology                                      |
|-----------|--------------------------------------------------|
| Frontend  | React, React Router, Styled Components, React Query |
| Backend   | Supabase (Database, Auth, Storage)              |
| Styling   | Styled Components, Custom UI System             |
| Dates     | date-fns                                        |
| Deployment| Netlify (frontend), Supabase (backend)          |

---

## 🌟 Features

### 🔐 Authentication
- Secure login for hotel employees only
- Avatar upload
- Profile update (name, password)

### 🏕 Cabin Management
- Add, edit, delete cabins
- Upload photos, set price, capacity, discount
- View all cabins in sortable table

### 🧾 Bookings
- Create bookings with arrival/departure dates
- Auto status: `unconfirmed`, `checked in`, `checked out`
- View full guest and cabin relation per booking
- Filter bookings by status

### 👤 Guest Management
- Store name, email, nationality, national ID
- Country flag auto-detected

### 📥 Check-In Flow
- Manual confirmation of payments
- Add breakfast during check-in if needed
- Check-in and check-out workflows

### 📊 Dashboard
- See today’s check-ins/check-outs
- Stats for bookings, revenue, occupancy
- Charts: Total Sales vs Extras (e.g., breakfast)
- View metrics for past 7, 30, or 90 days

### ⚙️ App Settings
- Define price of breakfast
- Min/max nights per stay
- Max guests per booking

### 🌘 UI/UX
- Responsive design
- Fully featured dark mode
- Keyboard accessibility
- Toast notifications and modal dialogs


### 1. Clone the Repository

git clone https://github.com/your-username/the-wild-oasis.git
cd the-wild-oasis
2. Setup Supabase
Create a new project on Supabase

Import the SQL schema (tables: cabins, guests, bookings, users)

Configure:

Supabase URL

Supabase Anon/Public Key

3. Create .env File
ini
Copy
Edit
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
4. Install & Run Locally
bash
Copy
Edit
npm install
npm run dev
5. Deploy
Frontend: Deploy via Netlify

Backend: Use Supabase for live authentication, database, and file storage



Backend: Use Supabase for live auth, database, and file storage

🧪 Testing
This project includes manual testing for core workflows:

✅ Cabin Create / Update / Delete

✅ Booking lifecycle (create, confirm, check-in, check-out)

✅ Check-in logic with payment validation

✅ Avatar upload & profile update

✅ Visual regression testing for dark/light modes

📸 Screenshots
Include the following screenshots in /public and reference them here:

Dashboard with metrics

Bookings page

Cabins CRUD table

Check-in modal

Guest info form

Example:

md
Copy
Edit
![Dashboard Screenshot](./public/dashboard.png)
🧑‍💻 Author
Sudarshan Hingalje

GitHub: @Sudarshanhingalje

Email: sudarshan@example.com

🤝 Contributing
Pull requests, issues, and suggestions are welcome!

Fork the repository

Create your feature branch

Commit your changes

Push and submit a PR

📄 License
This project is licensed under the MIT License — see the LICENSE file for details.

💡 Inspired By
Atulmy's Fullstack JavaScript Architecture

The Ultimate React Course 2025
