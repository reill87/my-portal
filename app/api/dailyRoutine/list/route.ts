import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { randomUUID } from "crypto";

export async function GET(request: Request) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  // const { startDate, description, endDate } = await request.json();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const dailyRoutine = await supabase.from("DailyRoutine").select("*");

  console.log(dailyRoutine);

  return new Response(null, {
    status: 200,
  });
}
