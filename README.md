# Earnity Admin Panel Project

This project is a Next.js web application for the Earnity platform, featuring user and admin dashboards with authentication, membership management, payments, referrals, and analytics.

---

## Project Structure

- `src/app/` - Main application pages and layouts
- `src/components/` - Reusable UI components and authentication components
- `src/contexts/` - React context providers (e.g., AuthContext)
- `src/lib/` - Utility functions and database helpers
- `src/types/` - TypeScript type definitions

---

## Installation Instructions

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to:

```
http://localhost:8000
```

---

## Usage

- **Login:**  
  Access the login page at `/auth/login`. Use the following admin credentials for testing:

  - Email: `admin@earnity.club`  
  - Password: `Admin@123`

- **Admin Panel:**  
  After login, admins are redirected to `/dashboard/admin` where they can manage users, payments, memberships, analytics, and settings.

- **User Panel:**  
  Regular users are redirected to `/dashboard/user` after login.

- **Registration:**  
  New users can register at `/register`.

---

## Build and Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

---

## Notes

- The project uses mock user data for authentication. Replace with real backend API for production.
- Ensure environment variables and secrets are configured properly for production.
- The admin panel is protected by role-based access control using React context.

---

## Troubleshooting

- If port 8000 is in use, kill the process using it:

```bash
lsof -ti:8000 | xargs kill -9
```

- Restart the development server after making changes.

---

## Contact

For support or questions, please contact the development team.

---

Enjoy using the Earnity Admin Panel!
