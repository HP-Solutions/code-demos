import { S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

dotenv.config();

const { AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_BUCKET_NAME } =
  process.env;

if (
  !AWS_REGION ||
  !AWS_ACCESS_KEY_ID ||
  !AWS_SECRET_ACCESS_KEY ||
  !S3_BUCKET_NAME
) {
  console.error("Missing required AWS environment variables");
  console.error({
    AWS_REGION: AWS_REGION ? "✓" : "✗",
    AWS_ACCESS_KEY_ID: AWS_ACCESS_KEY_ID ? "✓" : "✗",
    AWS_SECRET_ACCESS_KEY: AWS_SECRET_ACCESS_KEY ? "✓" : "✗",
    S3_BUCKET_NAME: S3_BUCKET_NAME ? "✓" : "✗",
  });
}

export const s3Client = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

export const BUCKET_NAME = S3_BUCKET_NAME;
