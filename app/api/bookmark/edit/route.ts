import { editBookmark } from '@/components/Bookmark/bookmarkService';
import { getFaviconInfo } from '../add/route';

export async function POST(request: Request) {
  const bookMark = await request.json();

  console.log(bookMark);

  const faviconUrl = await getFaviconInfo(bookMark.url);

  if (faviconUrl) {
    editBookmark({
      ...bookMark,
      thumbnailUrl: faviconUrl,
    });
  } else {
    editBookmark(bookMark);
  }

  return new Response(null, {
    status: 200,
  });
}
