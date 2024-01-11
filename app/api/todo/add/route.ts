import { Bookmark } from '@/components/Bookmark/Bookmarks';
import { TodoItem } from '@/app/todo/page';
import { editTodo, getTodo, setTodo } from '@/app/services/Todo';

export async function POST(request: Request) {
  const { name, hasCategory, category } = await request.json();

  const todoItems: TodoItem[] = getTodo();

  if (hasCategory && category) {
    // add details
    const todoItem = todoItems.find((item) => item.category === category);

    if (todoItem) {
      todoItem.details.push({
        name,
      });
      editTodo(todoItem);
    }
  } else {
    // add new category
    setTodo({
      category: name,
      details: [],
    });
  }

  return new Response(null, {
    status: 200,
  });
}
