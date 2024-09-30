import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { DailyRoutineDetail } from "@/components/DailyRoutine/type";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { routine_id, id, isCompleted, date }: DailyRoutineDetail =
    await request
      .json();

  console.log("id", routine_id, id, isCompleted);

  try {
    if (id) {
      const result = await supabase.from("DailyRoutineDetail")
        .update({
          isCompleted,
        })
        .eq("id", id)
        .select();

      console.log(result);
    } else {
      const result = await supabase.from("DailyRoutineDetail")
        .insert({
          isCompleted,
          routine_id,
          date,
        });
      console.log(result);
    }

    return new Response(null, {
      status: 200,
    });
  } catch (e) {
    return new Response(null, {
      status: 404,
    });
  }
}
