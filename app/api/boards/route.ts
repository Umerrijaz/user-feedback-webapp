// app/api/boards/route.ts
import { createClient } from "@/libs/supabase/server";
import { NextResponse } from "next/server";

// POST endpoint - for creating boards
export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { name } = await request.json();

    console.log("Creating board:", name);

    // Get current user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      console.error("Auth error:", userError);
      return NextResponse.json({ error: userError.message }, { status: 401 });
    }

    if (!user) {
      console.error("No user found");
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    console.log("User ID:", user.id);

    // Create board
    const { data, error } = await supabase
      .from("boards")
      .insert([
        {
          name: name,
          user_id: user.id,
        },
      ])
      .select();

    if (error) {
      console.error("Insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.log("Board created:", data);
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create board" },
      { status: 500 },
    );
  }
}

// GET endpoint - for fetching boards
export async function GET() {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data, error } = await supabase
      .from("boards")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching boards:", error);
    return NextResponse.json(
      { error: "Failed to fetch boards" },
      { status: 500 },
    );
  }
}
