# Earnity Web Application - Full Testing Instructions

This document provides step-by-step instructions to test the full Earnity web application, including user login, registration, admin dashboard, and user dashboard.

---

## 1. Setup and Start the Development Server

1. Open your terminal in the project root directory.

2. Install dependencies (if not already done):

```bash
npm install
# or
yarn install
```

3. Start the development server:

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

## 2. Testing User Login

1. Navigate to the login page:

```
http://localhost:8000/auth/login
```

2. Use the following test user credentials:

| User Type | Email                 | Password   |
|-----------|-----------------------|------------|
| Admin     | admin@earnity.club    | Admin@123  |
| Premium   | testuser@earnity.club | Test@1234  |
| Unpaid    | maria@earnity.club    | Maria@123  |

3. Enter the email and password, then click "Iniciar Sesión".

4. Verify redirection:

- Admin users should be redirected to `/dashboard/admin`.
- Premium users should be redirected to `/dashboard/user`.
- Unpaid users should be redirected to `/payment-required`.

---

## 3. Testing Registration

1. Navigate to the registration page:

```
http://localhost:8000/register
```

2. Fill in the registration form with valid data.

3. Submit the form.

4. Verify that the registration is successful and follow any instructions for payment activation.

---

## 4. Testing Admin Dashboard

1. Log in as an admin user.

2. Verify that the admin dashboard loads without errors.

3. Navigate through the admin panels:

- User Management
- Payment Management
- Membership Control
- Analytics & Reports
- Activity Logs
- Settings

4. Verify that each panel loads correctly and displays expected data or placeholders.

---

## 5. Testing User Dashboard

1. Log in as a premium user.

2. Verify that the user dashboard loads without errors.

3. Navigate through user panels:

- Earnings
- Membership
- Payments
- Referrals
- Settings

4. Verify that each panel loads correctly and displays expected data or placeholders.

---

## 6. Error Handling and Notifications

- Test invalid login credentials and verify error messages.
- Test access to admin routes as a non-admin user and verify redirection.
- Test payment-required redirection for unpaid users.
- Verify toast notifications appear for success and error events.

---

## 7. Additional Notes

- Ensure the development server is running on port 8000.
- If port 8000 is in use, kill the process using it:

```bash
lsof -ti:8000 | xargs kill -9
```

- Restart the development server after any code changes.

---

## 8. Support

If you encounter any issues during testing or need further assistance, please contact the development team.

---

Enjoy testing the Earnity platform!
