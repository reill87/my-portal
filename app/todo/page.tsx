import List from '@/components/Todo/List';
import { Database } from '@/supabase/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { UUID } from 'crypto';
import { cookies } from 'next/headers';

export interface TodoItem {
  id: UUID;
  name: string;
  todo_detail: TodoDetail[];
}

export interface TodoDetail {
  id: number;
  name: string;
  category_id: UUID;
  is_done: boolean;
}

interface TodoListResponse {
  todoItems: TodoItem[];
}

export default async function Todo() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: todoItems, error } = await supabase
    .from('todo_category')
    .select(
      `id,name,
      todo_detail (*)
    `
    )
    .eq('user_id', user?.id as UUID)
    .returns<TodoItem[]>();

  if (todoItems) {
    return (
      <>
        <List todoList={todoItems} />
      </>
    );
  }
}
