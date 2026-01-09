# Email Setup Instructions for Nodemailer

## Gmail App Password Setup

Follow these steps to enable email sending from your website:

### Step 1: Enable 2-Factor Authentication on Gmail
1. Go to https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Scroll down to "2-Step Verification" and enable it (if not already enabled)

### Step 2: Generate App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" as the app
3. Select "Windows Computer" (or your device type)
4. Google will generate a 16-character password
5. Copy this password

### Step 3: Update .env.local
1. Open the `.env.local` file in your project root
2. Replace `your_app_password_here` with the 16-character password from Step 2
3. Example:
   ```
   VITE_EMAIL_USER=manojsrivatsav2006@gmail.com
   VITE_EMAIL_PASSWORD=abcd efgh ijkl mnop
   VITE_EMAIL_TO=manojsrivatsav2006@gmail.com
   ```

### Step 4: Restart Dev Server
1. Stop the dev server (Ctrl+C)
2. Run `npm run dev` again
3. The environment variables will be loaded

### How It Works
- When someone fills the contact form and submits it:
  1. Their message is sent to your email (manojsrivatsav2006@gmail.com)
  2. They receive a confirmation email acknowledging receipt
  3. You can reply from your Gmail inbox

### Troubleshooting
- **Error: "Invalid login"** → Check if app password is correctly copied (spaces matter)
- **Error: "Less secure apps"** → Use app password instead of regular password
- **No email received** → Check spam/promotions folder in Gmail

### Security Note
- Never share your `.env.local` file
- The app password is different from your Gmail password
- You can revoke the app password anytime from Google Account settings
