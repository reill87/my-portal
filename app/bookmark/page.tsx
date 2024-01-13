import Bookmarks from '@/components/Bookmark/Bookmarks';
import { Database } from '@/supabase/database.types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Image from 'next/image';

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);

  return <Bookmarks />;
}
