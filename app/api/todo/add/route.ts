import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { randomUUID } from 'crypto';

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  const { name, hasCategory, category,id } = await request.json();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log('user',user);
  

  if(user?.id) {

    if(hasCategory) {
      const data = await supabase.from('todo_detail').insert({
        name,
        category_id:id,        
      })

      console.log('add detail',data);
      
    } else {
      const data = await supabase.from('todo_category').insert({
        name,
        id: randomUUID(),
        user_id:user.id
      })
    }

    return new Response(null, {
      status: 200,
    });
  } else {
    return new Response(null, {
      status: 404,
    })
  }
}
