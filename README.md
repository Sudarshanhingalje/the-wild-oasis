<h2 align="center">🗺️ Project Structure Diagram</h2>


![Untitled diagram _ Mermaid Chart-2025-07-02-092435](https://github.com/user-attachments/assets/cfc6423f-e741-4ebb-9eb1-cea680c082ec)
# 🌴 The Wild Oasis
### 🚀 [Live Demo →](https://hotelthe-wild-oasis.netlify.app/)
A full-stack hotel dashboard for managing cabins, bookings, and guests.  
Built for internal use by hotel staff, this app brings everything together—from guest data and check-ins to booking reports and cabin availability.


https://github.com/user-attachments/assets/d2c84d0d-c03c-44e0-b83d-95e95db35f37



## 📸 Screenshots

- [📊 Dashboard Overview](https://github.com/user-attachments/assets/4a7f30dd-bfb1-4ab3-8ca1-d68272a2c8a4)
- [🏡 Cabins Management](https://github.com/user-attachments/assets/9dfd36a1-fe8c-499d-91dd-daf93623fc89)
- [✍️ Add New Cabin](https://github.com/user-attachments/assets/c64c3f8f-027e-480e-afc1-77a0808143a1)
- [📦 Bookings Table](https://github.com/user-attachments/assets/6f0c3753-4176-4a72-bdf1-a06fe762d317)
- [➕ Create Booking](https://github.com/user-attachments/assets/c6319dc0-28a9-4352-a406-3b04639df3d1)
- [🧑 Guests Table](https://github.com/user-attachments/assets/16eb96d6-11d6-48f3-9371-c82c94040703)
- [🔍 Guest Detail View](https://github.com/user-attachments/assets/9c3d2ef2-c805-4369-953e-6fb9aa65503e)
- [🧮 Statistics Panel](https://github.com/user-attachments/assets/2f3d7953-1ff0-4526-9846-f45b9225e47b)
- [⚙️ Settings Panel](https://github.com/user-attachments/assets/4c6022cf-90f1-4932-b5db-d8a526d36368)

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




## 📝 My Notebook of Libraries

<p align="center">
  <img src="https://github.com/user-attachments/assets/521a1d5d-8230-4e90-8c36-e14382be4bd4" alt="Notebook Page" width="300" />
</p>




## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Sudarshanhingalje/the-wild-oasis.git
cd the-wild-oasis
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure Environment Variables
Create a .env file in the root directory:

env
Copy
Edit
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
⚠️ Replace with your actual Supabase credentials.

4. Start Development Server
bash
Copy
Edit
npm run dev
Visit: http://localhost:5174/

🧪 Supabase Setup
Create a Supabase project

Import SQL schema (cabins, guests, bookings, users)

Enable Row Level Security (RLS) as needed

Get your Supabase URL & Anon Key from project settings

Frontend: Deploy via Netlify
Backend: Use Supabase for live authentication, database, and file storage

Run
