import { Bookmark } from './Bookmarks';
import { cookies } from 'next/headers';

const MY_PORTAL_BOOKMARK_KEY = 'my_portal_bookmark_key';

export const getBookmark = (): Bookmark[] | [] => {
  const cookieStore = cookies();

  const getItem = cookieStore.get(MY_PORTAL_BOOKMARK_KEY)?.value;
  if (getItem) {
    return JSON.parse(getItem) satisfies Bookmark[];
  }

  return [];
};

export const setBookmark = (bookmark: Bookmark) => {
  const cookieStore = cookies();
  const items = getBookmark();
  cookieStore.set(
    MY_PORTAL_BOOKMARK_KEY,
    JSON.stringify([...items, bookmark]),
    {
      path: '/',
    }
  );
};
