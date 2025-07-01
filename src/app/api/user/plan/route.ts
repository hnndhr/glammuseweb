import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";

export async function PUT(req: Request) {
  try {
    const { email, subscriptionPlan } = await req.json();

    // 🔒 Validasi input
    if (!email || !subscriptionPlan) {
      return NextResponse.json(
        { error: "Missing email or subscriptionPlan" },
        { status: 400 }
      );
    }

    // 🔌 Koneksi DB
    await connectToDatabase();

    // 🔄 Update user
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { subscriptionPlan },
      { new: true }
    );

    // ❌ User tidak ditemukan
    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // ✅ Berhasil
    return NextResponse.json({
      message: "Subscription plan updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("❌ Failed to update subscription plan:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Missing email in query params" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      subscriptionPlan: user.subscriptionPlan,
    });
  } catch (error) {
    console.error("❌ Failed to fetch subscription plan:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
