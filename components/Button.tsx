import clsx from 'clsx';

export interface buttonProps {
  name: string;
  className: string;
  onClick?: () => void;
}

function Button({ name, className, onClick }: buttonProps) {
  const defaultClass =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded';

  return (
    <button onClick={onClick} className={clsx(defaultClass, className)}>
      {name}
    </button>
  );
}

export default Button;
