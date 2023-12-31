/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-nodejs.html.

Purpose:
s3Client.js is a helper function that creates an Amazon Simple Service Solution (S3) client.

Inputs (replace in code):
- REGION

*/
// snippet-start:[GettingStarted.JavaScript.createclientv3]

const { S3Client } = require("@aws-sdk/client-s3");
// Set the AWS Region.
const REGION = "ap-southeast-1"; //e.g. "us-east-1"
// Create an Amazon S3 service client object.
module.exports.s3Client = new S3Client({ region: REGION });

// snippet-end:[GettingStarted.JavaScript.createclientv3]
