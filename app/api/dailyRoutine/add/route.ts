import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { randomUUID } from "crypto";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { startDate, description, endDate } = await request.json();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("user", user, startDate, description, endDate);

  if (user?.id) {
    const data = await supabase.from("DailyRoutine").insert({
      startDate,
      endDate,
      description,
    });

    return new Response(null, {
      status: 200,
    });
  } else {
    return new Response(null, {
      status: 404,
    });
  }
}
