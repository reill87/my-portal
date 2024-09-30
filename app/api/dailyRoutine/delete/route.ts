import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  const { id } = await request.json();

  console.log('id',id)

  try {

    await supabase.from('todo_detail').delete().eq('category_id',id);
    await supabase.from('todo_category').delete().eq('id',id);

    return new Response(null, {
      status: 200,
    });

  } catch (e) {
    return new Response(null, {
      status: 404,
    })
  }

}
