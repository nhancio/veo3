**Database Design Document: AI Video Generation Platform**

---

### Overview

This document outlines the database schema for an AI-based video generation platform (like VeoAI). The schema supports user management, video generation from text prompts, asset handling, credit usage, and prompt history.

---

### Tables & Schemas

#### 1. **profiles**

* **Purpose:** Store user-related metadata (separate from `auth.users`).
* **Columns:**

  * `user_id` (UUID, PK): FK to `auth.users.id`
  * `full_name` (TEXT): User's name
  * `avatar_url` (TEXT): Profile picture URL
  * `credit_balance` (INT): Current credit balance
  * `created_at` (TIMESTAMPTZ): Record creation time

#### 2. **credit\_ledger**

* **Purpose:** Maintain a transaction history of all credit changes.
* **Columns:**

  * `id` (UUID, PK): Unique ID
  * `user_id` (UUID): FK to `profiles`
  * `change` (INT): Credit amount (positive or negative)
  * `reason` (TEXT): Type (`purchase`, `job_cost`, etc.)
  * `related_job` (UUID): FK to `video_jobs`
  * `created_at` (TIMESTAMPTZ): Timestamp of transaction

#### 3. **video\_jobs**

* **Purpose:** Track each video generation request.
* **Columns:**

  * `id` (UUID, PK): Unique job ID
  * `user_id` (UUID): FK to `profiles`
  * `prompt` (TEXT): Prompt used to generate video
  * `audio_instructions` (TEXT): Optional audio or dialogue
  * `mode` (TEXT): Generation mode (`fast`, `ultra`)
  * `credit_cost` (INT): Credits spent
  * `status` (ENUM): Job status (`queued`, `processing`, etc.)
  * `started_at` / `finished_at` (TIMESTAMPTZ): Lifecycle timestamps
  * `error_message` (TEXT): If failed
  * `created_at` (TIMESTAMPTZ): Request creation time

#### 4. **assets**

* **Purpose:** Store metadata about uploaded or generated files.
* **Columns:**

  * `id` (UUID, PK): Unique ID
  * `storage_path` (TEXT): Path to file in storage bucket
  * `mime_type` (TEXT): Type of file (`video/mp4`, `image/png`, etc.)
  * `size_bytes` (BIGINT): File size
  * `created_at` (TIMESTAMPTZ): Upload time

#### 5. **job\_assets**

* **Purpose:** Map assets to their related video job.
* **Columns:**

  * `job_id` (UUID): FK to `video_jobs`
  * `asset_id` (UUID): FK to `assets`
  * `role` (ENUM): Role of the asset (`reference_image`, `result_video`, etc.)
  * **PK:** Composite (`job_id`, `asset_id`, `role`)

#### 6. **user\_prompts**

* **Purpose:** Track each user prompt and generation attempt.
* **Columns:**

  * `id` (UUID, PK): Unique prompt ID
  * `user_id` (UUID): FK to `profiles`
  * `prompt` (TEXT): User input text
  * `audio_input` (TEXT): Optional voice-over / mood input
  * `reference_asset_id` (UUID): FK to `assets` (optional)
  * `mode` (TEXT): Generation mode
  * `related_job_id` (UUID): FK to `video_jobs` (nullable)
  * `created_at` (TIMESTAMPTZ): Time of prompt submission

---

### Entity Relationships

* `profiles` has 1\:N relationship with `video_jobs`, `credit_ledger`, `user_prompts`
* `video_jobs` has 1\:N relationship with `job_assets`
* `job_assets` maps N\:M relationship between `video_jobs` and `assets`
* `user_prompts` optionally links to `video_jobs` and `assets`
* `credit_ledger` optionally links to `video_jobs`

---

### Notes

* All UUIDs are generated using `uuid_generate_v4()`
* `credit_ledger` is append-only and used for full audit trail
* `user_prompts` can be shown as a "chat history" to users
* Enable RLS and restrict data access by `user_id` for all user-facing tables
* Use Supabase Storage buckets for storing actual video/image files

---

### Future Extensions

* `feedback` table for rating outputs
* `subscriptions` for recurring billing
* `prompt_templates` for common scenes / use-cases
* `models` to support multiple AI backends or model versions
