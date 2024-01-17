import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { id } = await request.json();

  await supabase.from("bookmark").delete().eq("id", id);

  return new Response(null, {
    status: 200,
  });
}
