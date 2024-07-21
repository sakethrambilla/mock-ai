import prisma from "@/lib/db";
import { stat } from "fs";
import { NextApiHandler } from "next";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextApiHandler) => {
  try {
    const data = await req.json();
    const response = await prisma.userAnswer.create({
      data: data,
    });

    return NextResponse.json({ status: 200, message: response });
  } catch (error) {
    console.log("Error while posting user answer:", error);
    return NextResponse.json({ status: 500, message: error });
  }
};
