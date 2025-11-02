# AWS S3 Project

React frontend + Express backend application.

## Setup

Install dependencies:

```
npm install
```

## Development

### Run both client and server:

```
npm run client  # Frontend on port 3000
```

Then on a new terminal:

```
npm run server  # Backend on port 5000
```

## Environment Variables

Copy `server/.env.example` to `server/.env` and add your AWS credentials.

Here’s where to find or create each of those values in AWS for your S3 setup:

### **1️⃣ AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY**

These are your **programmatic credentials** for accessing AWS from code or the CLI.

#### **Option A: Create new keys (recommended for apps or development)**

1. Go to **[AWS Management Console → IAM](https://console.aws.amazon.com/iam/)**.
2. In the sidebar, click **Users** → choose your user (or create one if none exists).
3. Go to the **Security credentials** tab.
4. Under **Access keys**, click **Create access key**.
5. Copy:

   - **Access key ID** → `AWS_ACCESS_KEY_ID`
   - **Secret access key** → `AWS_SECRET_ACCESS_KEY`
     _(You’ll only see the secret once—save it securely!)_

✅ **Tip:** Use an IAM user or role with **least privilege** — only the permissions your app needs (e.g. `s3:PutObject`, `s3:GetObject`, etc.).

### **2️⃣ AWS_REGION**

This is simply the **region** where your S3 bucket is hosted.

You can find it in two ways:

- In the **AWS Console → S3 → your bucket**, look under **Bucket details → AWS Region**.
  Example: `us-west-2` or `us-east-1`.
- Or, if using the AWS CLI:

  ```bash
  aws s3api get-bucket-location --bucket your_bucket_name
  ```

### **3️⃣ S3_BUCKET_NAME**

This is just the **name** of your S3 bucket.
You can find it in the **S3 console** (top-level list of buckets).
Example: `my-app-uploads` or `project-files-prod`.

### **Example `.env` file**

```bash
AWS_ACCESS_KEY_ID=AKIAxxxxxxxxxxxxxxx
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYxxxxxxxxx
AWS_REGION=us-west-2
S3_BUCKET_NAME=my-app-uploads
```
