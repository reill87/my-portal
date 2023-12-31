import { Bookmark } from '../../components/Bookmark/Bookmarks';
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

export const deleteBookmark = (deleteItemId: string) => {
  const cookieStore = cookies();
  const bookMarkList: Bookmark[] = getBookmark();
  cookieStore.set(
    MY_PORTAL_BOOKMARK_KEY,
    JSON.stringify(bookMarkList.filter(({ id }) => id !== deleteItemId))
  );
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

export const editBookmark = (bookMark: Bookmark) => {
  const cookieStore = cookies();
  const bookMarkList: Bookmark[] = getBookmark();
  cookieStore.set(
    MY_PORTAL_BOOKMARK_KEY,
    JSON.stringify(
      bookMarkList.map((item) => {
        if (item.id === bookMark.id) {
          return {
            ...item,
            title: bookMark.title,
            url: bookMark.url,
          };
        }
        return item;
      })
    )
  );
};
