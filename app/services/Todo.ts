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
  console.log('setTodo', todoItem);

  cookieStore.set(MY_PORTAL_TODO_KEY, JSON.stringify([...items, todoItem]), {
    path: '/',
  });
};

export const editTodo = (todoItem: TodoItem) => {
  const cookieStore = cookies();
  const todos: TodoItem[] = getTodo();
  cookieStore.set(
    MY_PORTAL_TODO_KEY,
    JSON.stringify(
      todos.map((todo) => {
        if (todo.category === todoItem.category) {
          return {
            ...todo,
            todoItem,
          };
        }
        return todo;
      })
    )
  );
};
