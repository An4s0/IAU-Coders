# Nuha API Documentation

## Overview
Nuha is a coding problem platform that allows users to solve programming challenges, submit solutions, and track their progress. This document outlines the available API endpoints for frontend integration.

## Base URL
```
https://api.nuha.com
```

## Authentication
Most endpoints require JWT authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## Error Response Format
All error responses follow this format:
```json
{
  "result": "FAILED",
  "msg": "Error message description"
}
```

## Success Response Format
Successful responses follow this format:
```json
{
  "result": "SUCCESS",
  "msg": "Success message"
}
```

---

## Authentication Endpoints

### Register User
Create a new user account.

**Endpoint:** `POST /register`  
**Authentication:** None

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

**Password Requirements:**
- Minimum 8 characters
- Must contain uppercase letter
- Must contain lowercase letter
- Must contain number
- Maximum 72 characters

**Response (201):**
```json
{
  "data": {
    "user_name": "string",
    "user_email": "string",
    "created_at": "timestamp"
  }
}
```

### Login
Authenticate user and receive JWT token.

**Endpoint:** `POST /login`  
**Authentication:** None

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response (200):**
```json
{
  "data": {
    "token": "string",
    "email": "string",
    "name": "string"
  }
}
```

### Verify Email
Verify user's email address.

**Endpoint:** `GET /verify/{token}`  
**Authentication:** None

**Response (200):**
```json
{
  "result": "SUCCESS",
  "msg": "Email verified successfully"
}
```

---

## Problem Endpoints

### Get Problem List
Retrieve list of available problems.

**Endpoint:** `GET /problem`  
**Authentication:** Optional

**Query Parameters:**
- `page` (optional): Page number for pagination
- `limit` (optional): Items per page

**Response (200):**
```json
{
  "data": [
    {
      "id": "uuid",
      "title": "string",
      "difficulty": "string",
      "tags": ["string"],
      "time_limit": "float",
      "memory_limit": "float"
    }
  ]
}
```

### Get Single Problem
Get detailed information about a specific problem.

**Endpoint:** `GET /problem?problem_id={id}`  
**Authentication:** Optional

**Response (200):**
```json
{
  "data": {
    "id": "uuid",
    "title": "string",
    "difficulty": "string",
    "description": "string",
    "tags": ["string"],
    "time_limit": "float",
    "memory_limit": "float"
  }
}
```

---

## Submission Endpoints

### Submit Solution
Submit a solution for a problem.

**Endpoint:** `POST /submit?problem_id={id}`  
**Authentication:** Required

**Request Body:**
```json
{
  "language": "integer",
  "code": "string"
}
```

**Language IDs:**
- Python (3.12): 100
- Python (3.11): 92
- C (Clang 18): 104
- Java: 62
- JavaScript: 63
- [See full list in code for more languages]

**Response (201):**
```json
{
  "data": {
    "submission_id": "uuid"
  }
}
```

### Get Submission Status
Get status and details of a submission.

**Endpoint:** `GET /submit?submission_id={id}`  
**Authentication:** Required

**Response (200):**
```json
{
  "data": {
    "id": "uuid",
    "problem_id": "uuid",
    "user_id": "uuid",
    "status": "string",
    "language": "string",
    "code": "string",
    "created_at": "timestamp"
  }
}
```

**Possible Status Values:**
- PENDING
- ACCEPTED
- WRONG ANSWER
- TIME LIMIT EXCEEDED
- MEMORY LIMIT EXCEEDED
- COMPILATION ERROR
- RUNTIME ERROR
- SERVER ERROR

### Get User Submissions
Get all submissions for a user.

**Endpoint:** `GET /submit?user_id={id}`  
**Authentication:** Required

**Query Parameters:**
- `page` (optional): Page number for pagination
- `limit` (optional): Items per page

**Response (200):**
```json
{
  "data": [
    {
      "id": "uuid",
      "problem_id": "uuid",
      "status": "string",
      "language": "string",
      "created_at": "timestamp"
    }
  ]
}
```

---

## Admin Endpoints
These endpoints require admin authentication.

### Create Problem
Create a new programming problem.

**Endpoint:** `POST /problem`  
**Authentication:** Admin Only

**Request Body:**
```json
{
  "title": "string",
  "description": "string",
  "difficulty": "string",
  "tags": ["string"],
  "timelimit": "float",
  "memorylimit": "float"
}
```

**Difficulty Values:**
- EASY
- MEDIUM
- HARD

**Response (201):**
```json
{
  "data": {
    "ID": "uuid",
    "Title": "string"
  }
}
```

### Update Problem
Update an existing problem.

**Endpoint:** `PUT /problem?problem_id={id}`  
**Authentication:** Admin Only

**Request Body:**
```json
{
  "title": "string (optional)",
  "description": "string (optional)",
  "difficulty": "string (optional)",
  "tags": ["string"] (optional),
  "time_limit": "float (optional)",
  "memory_limit": "float (optional)"
}
```

**Response (200):**
```json
{
  "result": "SUCCESS",
  "msg": "Problem updated successfully"
}
```

### Delete Problem
Delete an existing problem.

**Endpoint:** `DELETE /problem?problem_id={id}`  
**Authentication:** Admin Only

**Response (200):**
```json
{
  "result": "SUCCESS",
  "msg": "Problem deleted successfully"
}
```

### Add Test Cases
Add test cases to a problem. Supports both JSON and ZIP file upload.

**Endpoint:** `POST /testcase?problem_id={id}`  
**Authentication:** Admin Only

**Method 1 - JSON Format:**
```json
[
  {
    "stdin": "string",
    "expected_output": "string"
  }
]
```

**Method 2 - ZIP File:**
Upload a ZIP file containing test cases in the following format:
- `1.in`: Input file
- `1.out`: Expected output file
- `2.in`: Second input file
- `2.out`: Second expected output file
- etc.

**Response (201):**
```json
{
  "result": "SUCCESS",
  "msg": "Test cases added successfully"
}
```

## Rate Limits
- Standard endpoints: 100 requests per minute
- Submission endpoints: 30 submissions per minute
- Admin endpoints: 50 requests per minute

## Notes
- All timestamps are in UTC
- UUIDs are used for all IDs
- Maximum code submission size: 64KB
- Maximum test case file size: 1MB
