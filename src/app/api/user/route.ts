import {userSchema} from "@/lib/schema";
import {NextResponse} from "next/server";

export async function POST(req: Request) {

    const body = await req.json();
    const result = userSchema.safeParse(body)

    if (!result.success) {
        return NextResponse.json({errors: result.error.flatten()})
    }

    return NextResponse.json({
        message: "OK",
        data: result.data
    })
}