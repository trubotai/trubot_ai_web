import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const res = await fetch(
      "https://crm.trubotai.com/api/v1/LeadCapture/84006ddb862651d0c4c17f07061b0f8b",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          productInterest: "TruSocial",
          source: "Waitlist Page",
        }),
      }
    );

    if (!res.ok)
      return NextResponse.json({ error: "Failed to submit" }, { status: 500 });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
