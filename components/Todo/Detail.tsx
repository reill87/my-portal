import { TodoDetail } from '@/app/todo/page';

interface Detail {
  onClick?: () => void;
}
interface TodoDetailProps {
  detail: TodoDetail & Detail;
}

export default function Detail({ detail }: TodoDetailProps) {
  if (!detail) {
    return;
  }
  return (
    <li
      key={detail.id}
      className='text-blue-600 p-1 border-b-2 border-teal-500 flex items-center'
    >
      <input
        type='checkbox'
        checked={detail.is_done}
        className='mr-2 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
      ></input>
      {detail.name}
      {''}
      <span className='ml-2 text-red-600' onClick={detail?.onClick}>
        [삭제]
      </span>
    </li>
  );
}
