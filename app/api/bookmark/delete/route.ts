import { deleteBookmark } from '@/components/Bookmark/bookmarkService';

export async function POST(request: Request) {
  const { id } = await request.json();

  console.log(id);

  deleteBookmark(id);

  return new Response(null, {
    status: 200,
  });
}
