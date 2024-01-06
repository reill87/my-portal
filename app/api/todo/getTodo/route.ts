import { TodoItem } from '@/app/todo/page';
import { getTodo } from '@/app/services/Todo';

export async function GET(request: Request) {
  console.log('add');
  const todoItems: TodoItem[] = getTodo();

  return Response.json({ todoItems });
}
