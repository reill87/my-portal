'use client';

export default function List({ src }: { src: string }) {
  return (
    <div className='w-screen h-screen'>
      <iframe width={'100%'} height={'100%'} src={src} />
    </div>
  );
}
