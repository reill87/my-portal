import { cookies } from 'next/headers';
import { TodoItem } from '../todo/page';

const MY_PORTAL_TODO_KEY = 'my_portal_todo_key';

export const getTodo = (): TodoItem[] | [] => {
  const cookieStore = cookies();

  const getItem = cookieStore.get(MY_PORTAL_TODO_KEY)?.value;
  if (getItem) {
    return JSON.parse(getItem) satisfies TodoItem[];
  }

  return [];
};

// export const deleteBookmark = (deleteItemId: string) => {
//   const cookieStore = cookies();
//   const bookMarkList: Bookmark[] = getBookmark();
//   cookieStore.set(
//     MY_PORTAL_BOOKMARK_KEY,
//     JSON.stringify(bookMarkList.filter(({ id }) => id !== deleteItemId))
//   );
// };

export const setTodo = (todoItem: TodoItem) => {
  const cookieStore = cookies();
  const items = getTodo();
  cookieStore.set(MY_PORTAL_TODO_KEY, JSON.stringify([...items, todoItem]), {
    path: '/',
  });
};

// export const editBookmark = (bookMark: Bookmark) => {
//   const cookieStore = cookies();
//   const bookMarkList: Bookmark[] = getBookmark();
//   cookieStore.set(
//     MY_PORTAL_BOOKMARK_KEY,
//     JSON.stringify(
//       bookMarkList.map((item) => {
//         if (item.id === bookMark.id) {
//           return {
//             ...item,
//             title: bookMark.title,
//             url: bookMark.url,
//           };
//         }
//         return item;
//       })
//     )
//   );
// };
