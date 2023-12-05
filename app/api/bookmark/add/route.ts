import { Bookmark } from '@/components/Bookmark/Bookmarks';
import { setBookmark } from '@/components/Bookmark/getBookmark';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { id, title, url }: Bookmark = await request.json();

  console.log(id, title, url);

  setBookmark({ id, title, url });

  return new Response(null, {
    status: 200,
  });
}
