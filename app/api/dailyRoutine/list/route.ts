import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function GET(request: Request) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  // const { startDate, description, endDate } = await request.json();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: dailyRoutine, error } = await supabase
    .from("DailyRoutine")
    .select("*");

  console.log("dailyRoutine get list", dailyRoutine);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(dailyRoutine), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
