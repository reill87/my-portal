import clsx from 'clsx';

type SizeType = 'small' | 'medium' | 'large' | 'default';
type ColorType = 'blue' | 'black' | 'red' | 'pink' | 'default';

export interface buttonProps {
  name?: string;
  className?: string;
  color?: ColorType;
  fontColor?: ColorType;
  padding?: SizeType;
  size?: SizeType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({
  size = 'default',
  padding = 'default',
  color = 'default',
  fontColor = 'default',
  name,
  className,
  onClick,
}: buttonProps) {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'text-sm';
      case 'medium':
        return 'text-base';
      case 'large':
        return 'text-lg';
      default:
        return 'text-base';
    }
  };

  const getPaddingClass = () => {
    switch (padding) {
      case 'small':
        return 'p-0.5';
      case 'medium':
        return 'p-1';
      case 'large':
        return 'p-2';
      default:
        return 'p-1';
    }
  };

  const getColorClass = () => {
    switch (color) {
      case 'blue':
        return 'bg-cyan-600 hover:bg-cyan-700';
      case 'black':
        return 'bg-neutral-900 hover:bg-neutral-950';
      case 'red':
        return 'bg-red-600 hover:bg-red-700';
      case 'pink':
        return 'bg-fuchsia-600 hover:bg-fuchsia-700';
      case 'default':
        return 'bg-cyan-600 hover:bg-cyan-700';
    }
  };

  const getFontClass = () => {
    switch (fontColor) {
      case 'blue':
        return 'text-cyan-500';
      case 'black':
        return 'text-neutral-500';
      case 'red':
        return 'text-red-500';
      case 'pink':
        return 'text-fuchsia-500';
      case 'default':
        return 'text-white';
    }
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        `${getPaddingClass()} ${getSizeClass()} ${getColorClass()} ${getFontClass()}  font-bold border border-blue-700 rounded'`,
        className ?? ''
      )}
    >
      {name ?? ''}
    </button>
  );
}

export default Button;
