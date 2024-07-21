import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  try {
    const data = await req.json();
    console.log(data);
    const response = await prisma.mockInterview.create({
      data: {
        ...data,
      },
    });
    return NextResponse.json({ status: 200, message: response });
  } catch (error) {
    console.log("Error while creating new mockInterview:", error);
    return NextResponse.json({ status: 500, messsage: error });
  }
};
