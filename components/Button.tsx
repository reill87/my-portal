import clsx from 'clsx';

export interface buttonProps {
  name: string;
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ name, className, onClick }: buttonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'bg-cyan-600 hover:bg-cyan-700 text-white font-bold p-2 border border-blue-700 rounded',
        className
      )}
    >
      {name}
    </button>
  );
}

export default Button;
