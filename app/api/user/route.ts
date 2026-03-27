import { createClient } from "@/libs/supabase/server";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const body = await req.json();

    if (!body.name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    try {
      // CHANGED: "users" -> "profiles"
      // CHANGED: .insert -> .update (since the row already exists for you)
      const { data } = await supabase
        .from("profiles")
        .update({ name: body.name })
        .eq("id", user.id)
        .select();

      return NextResponse.json({ data }, { status: 200 });
    } catch (e) {
      console.error(e);
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 },
      );
    }
  } else {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }
}
