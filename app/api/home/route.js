import { NextResponse } from "next/server";
import { getProductListHome } from "@/services/home/index";

export async function GET(req) {
  try {
    const data = await getProductListHome();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    NextResponse.error(error, { status: 500 });
  }
}
