import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { message, model } = await request.json()
    
    // Demo response - replace with actual OpenAI call
    return NextResponse.json({
      reply: `You said: ${message}. This is a demo response. Configure your OpenAI API key to enable real AI responses.`,
      model: model || 'gpt-4o-mini',
    })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
