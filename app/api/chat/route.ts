import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.SILICONFLOW_API_KEY,  // 环境变量名可以自定义
  baseURL: 'https://api.siliconflow.com/v1', // 关键：指向 SiliconFlow 的 API 端点
})

export async function POST(request: NextRequest) {
  try {
    const { message, model } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const completion = await openai.chat.completions.create({
      model: model || 'Qwen/Qwen3.6-27B',
      messages: [{ role: 'user', content: message }],
    })

    return NextResponse.json({
      reply: completion.choices[0].message.content,
      usage: completion.usage,
    })
  } catch (error) {
    console.error('OpenAI API Error:', error)
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
}
