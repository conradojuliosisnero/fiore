import { NextResponse } from "next/server";
import { getProductList } from "@/services/shopy/index";

export async function GET(req) {
  try {
    const response = await getProductList();
    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.error({ status: 500 });
  }
}
