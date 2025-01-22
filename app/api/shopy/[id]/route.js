import { NextResponse } from "next/server";
import { getProductById } from "@/services/shopy/index";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const response = await getProductById(id);
    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.error({ status: 500 });
  }
}
