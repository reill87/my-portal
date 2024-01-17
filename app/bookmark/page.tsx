import Bookmarks, { Bookmark } from '@/components/Bookmark/Bookmarks';
import { Database } from '@/supabase/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { UUID } from 'crypto';
import { cookies } from 'next/headers';

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.id) {
    const { data: bookmark } = await supabase
      .from('bookmark')
      .select('*')
      .eq('user_id', user?.id as UUID)
      .returns<Bookmark[]>();

    console.log('userid', user.id, bookmark);

    if (bookmark) {
      return <Bookmarks bookMarkList={bookmark} />;
    }
  }
}
