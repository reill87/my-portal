'use client';
import Button, { buttonProps } from '../Button';
import { useRouter } from 'next/navigation';

interface deleteButtonProps extends buttonProps {
  id: string;
}

function DeleteButton({ id, ...restProps }: deleteButtonProps) {
  const router = useRouter();

  async function handleClickEventrouter(id: string) {
    console.log(id);
    const data = await fetch('/api/bookmark/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    });

    if (data.status === 200) {
      router.refresh();
    }
  }

  return (
    <Button onClick={() => handleClickEventrouter(id)} {...restProps}></Button>
  );
}

export default DeleteButton;
