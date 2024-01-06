import { Bookmark } from '@/components/Bookmark/Bookmarks';
import { TodoItem } from '@/app/todo/page';
import { getTodo, setTodo } from '@/app/services/Todo';

export async function POST(request: Request) {
  const { name, hasCategory, category } = await request.json();

  const todoItems: TodoItem[] = getTodo();

  if (hasCategory && category) {
    // add details
    const todoItem = todoItems.find((item) => item.category === category);
    todoItem?.details.push({
      name,
    });
  } else {
    // add new category
    todoItems.push({
      category,
      details: [],
    });
  }
}
