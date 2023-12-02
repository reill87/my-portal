import Bookmarks from '@/components/Bookmark/Bookmarks';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Welcome to My Portal</h1>
      <Bookmarks />
      <div>SearchBar</div>
      <div>Clock</div>
    </main>
  );
}
