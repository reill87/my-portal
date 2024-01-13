import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { randomUUID } from 'crypto';

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  const { id } = await request.json();

  try {

    await supabase.from('todo_detail').delete().eq('id',id)

    return new Response(null, {
      status: 200,
    });

  } catch (e) {
    return new Response(null, {
      status: 404,
    })
  }

}
