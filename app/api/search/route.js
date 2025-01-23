import { NextResponse } from "next/server";
import { searchProducts } from "@/services/search/index";

export async function GET(req) {
  const url = new URL(req.url);
  const query = url.searchParams.get("query");
  try {
      const data = await searchProducts(query);
      console.log(data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
