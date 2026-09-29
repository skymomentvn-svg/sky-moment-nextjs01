import { NextRequest, NextResponse } from "next/server";

/**
 * Handles project-request submissions from <ContactForm />.
 *
 * No provider is wired up yet. Pick one and fill in the matching
 * section below — the request/response contract for the form does
 * not need to change.
 */
export async function POST(request: NextRequest) {
  const payload = await request.json();

  const { name, email, details } = payload || {};
  if (!name || !email || !details) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  // ---- Option A: Formspree -------------------------------------------
  // const res = await fetch(`https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json", Accept: "application/json" },
  //   body: JSON.stringify(payload),
  // });
  // if (!res.ok) return NextResponse.json({ error: "Formspree error" }, { status: 502 });

  // ---- Option B: Resend -------------------------------------------
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Sky Moment <hello@skymoment.vn>",
  //   to: "studio@skymoment.vn",
  //   subject: `New project request from ${name}`,
  //   text: JSON.stringify(payload, null, 2),
  // });

  // ---- Option C: Supabase -------------------------------------------
  // import { createClient } from "@supabase/supabase-js";
  // const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  // const { error } = await supabase.from("project_requests").insert(payload);
  // if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Until a provider above is configured, log server-side so nothing
  // is silently lost, and return success so the UI flow is testable.
  console.info("[contact] New project request:", payload);

  return NextResponse.json({ ok: true });
}
