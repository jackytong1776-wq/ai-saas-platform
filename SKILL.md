---
name: ai-saas-platform
description: AI API SaaS Platform - Next.js 14 with Stripe billing, OpenAI integration, and Mercury/Stripe compliant design
---

# AI SaaS Platform

## Overview
Enterprise-grade AI API SaaS platform optimized for Mercury and Stripe approval.

## Pages
- `/` - Landing page with Hero, Features, CTA
- `/features` - Feature showcase
- `/pricing` - Pricing plans (Starter $9, Pro $29, Enterprise)
- `/about` - About page
- `/contact` - Contact form
- `/login` - Authentication
- `/dashboard` - User dashboard with API key management
- `/legal/terms` - Terms of Service
- `/legal/privacy` - Privacy Policy

## Setup
1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in your keys
3. `npm run dev`

## Environment Variables
- OPENAI_API_KEY
- STRIPE_SECRET_KEY
- STRIPE_WEBHOOK_SECRET
- NEXT_PUBLIC_APP_URL
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
