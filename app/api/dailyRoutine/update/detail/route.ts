import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { TodoDetail } from "@/app/todo/page";
import { TodoDetailUpdateProps } from "@/components/Todo/List";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { id, is_done, name }: TodoDetail = await request.json();

  console.log(id, is_done, name);

  try {
    let updateData: TodoDetailUpdateProps = {
      id,
      is_done,
      name,
    };

    console.log(updateData);

    const result = await supabase.from("todo_detail")
      .update(updateData)
      .eq("id", id);

    console.log(result);

    return new Response(null, {
      status: 200,
    });
  } catch (e) {
    return new Response(null, {
      status: 404,
    });
  }
}
