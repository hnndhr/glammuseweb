import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";

// GET /api/user/[email]
export async function GET(
  req: Request,
  { params }: { params: { email: string } }
) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ email: decodeURIComponent(params.email) });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("GET user error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

// PUT /api/user/[email]
export async function PUT(
  req: Request,
  { params }: { params: { email: string } }
) {
  try {
    await connectToDatabase();
    const data = await req.json();

    const updatedUser = await User.findOneAndUpdate(
      { email: decodeURIComponent(params.email) },
      { $set: data },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("PUT user error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
