# AI SaaS Platform

AI API SaaS Platform with Stripe billing, optimized for Mercury and Stripe approval.

## Pages
- `/` - Landing page
- `/features` - Features showcase
- `/pricing` - Pricing plans (Starter $9, Pro $29, Enterprise)
- `/about` - About page
- `/contact` - Contact form
- `/login` - Login/Signup
- `/dashboard` - User dashboard with API key management
- `/legal/terms` - Terms of Service
- `/legal/privacy` - Privacy Policy

## API Endpoints
- `POST /api/chat` - Chat completion
- `POST /api/stripe/checkout` - Create checkout session
- `POST /api/stripe/webhook` - Stripe webhook handler

## Setup

```bash
npm install
cp .env.example .env.local
# Fill in your API keys in .env.local
npm run dev
```

## Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

## Environment Variables

- `OPENAI_API_KEY` - Your OpenAI API key
- `STRIPE_SECRET_KEY` - Your Stripe secret key
- `STRIPE_WEBHOOK_SECRET` - Your Stripe webhook secret
- `NEXT_PUBLIC_APP_URL` - Your app URL
