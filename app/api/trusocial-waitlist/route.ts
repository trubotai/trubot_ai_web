import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const res = await fetch(
      "https://crm.trubotai.com/api/v1/LeadCapture/7315104a54c5d2a224e047578c65f36f",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          emailAddress: data.email,
          phoneNumber: data.mobile,
          cCompanyName: data.companyName,
          cJobTitle: data.jobTitle,
          cSocialMediaNeeds: data.socialMediaNeeds,
          cSource: "TruSocial Waitlist Page",
          // "addressStreet": "ADDRESS_STREET",
          // "addressCity": "ADDRESS_CITY",
          // "addressState": "ADDRESS_STATE",
          // "addressCountry": "ADDRESS_COUNTRY",
          // "addressPostalCode": "ADDRESS_POSTAL_CODE",
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
