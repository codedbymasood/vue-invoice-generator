# Invoice Generator

A simple and extensible Invoice Generator built with **Nuxt 3** and **Supabase**. Ideal for freelancers, agencies, or SaaS platforms who need to manage and track invoices online.

---

## Features

- Create, view, and manage invoices.
- Generate unique invoice numbers.
- Client-side and server-side logic with Supabase.
- API routes for fetching, creating, and filtering invoices.

---

## Tech Stack

- [Nuxt 3](https://nuxt.com)
- [Supabase](https://supabase.com) (Auth + Database)
- [Pinia](https://pinia.vuejs.org/)
- TypeScript

---

## Setup Instructions

**Install dependencies**
```
pnpm install
```

## Supabase RLS Policies (Secure Setup)

Below is the recommended RLS configuration for securing the `invoices` table in a multi-user system:

```
sql
-- Step 1: Remove any insecure default access
DROP POLICY IF EXISTS "Allow authenticated users full access" ON invoices;

-- Step 2: Enable RLS
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

-- Step 3: Create secure, role-specific policies

-- Policy 1: Allow users to INSERT only their own invoices
CREATE POLICY "Users can insert own invoices" 
ON invoices 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Policy 2: Allow users to SELECT only their own invoices
CREATE POLICY "Users can view own invoices" 
ON invoices 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Policy 3: Allow users to UPDATE only their own invoices
CREATE POLICY "Users can update own invoices" 
ON invoices 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Policy 4: Allow users to DELETE only their own invoices
CREATE POLICY "Users can delete own invoices" 
ON invoices 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);
```

## Contribute
PRs and issues are welcome! Let’s make invoicing simple.

