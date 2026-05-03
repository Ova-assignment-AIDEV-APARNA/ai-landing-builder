export async function POST(req: Request) {
  const { prompt } = await req.json();

  return Response.json({
    result: ` ${prompt}

• Headline: AI Powered Landing Page
• Feature 1: Fast generation
• Feature 2: Clean UI
• Feature 3: Production ready

 Start building now`,
  });
}
