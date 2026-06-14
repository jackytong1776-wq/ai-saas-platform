import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {})
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  try {
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret)

    switch (event.type) {
      case 'checkout.session.completed':
        console.log('Payment successful:', event.data.object)
        break
      case 'customer.subscription.updated':
        console.log('Subscription updated:', event.data.object)
        break
      case 'customer.subscription.deleted':
        console.log('Subscription canceled:', event.data.object)
        break
      case 'invoice.payment_failed':
        console.log('Payment failed:', event.data.object)
        break
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook Error:', error)
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 })
  }
}
