import Button from '../Button';
import Link from 'next/link';

interface Bookmark {
  title: string;
  url: string;
  thumbnailUrl?: string;
}
function Bookmarks() {
  const bookMarkList: Bookmark[] = [
    {
      title: 'Naver',
      url: 'https://naver.com',
    },
    { title: 'Daum', url: 'https://daum.net' },
  ];

  const onAddBtnClick = () => {
    location.href = '/bookmark/add';
  };

  return (
    <div className='p-10 flex-col justify-center bg-stone-800 text-orange-500 w-full'>
      <h2>This is Your book marks</h2>
      {bookMarkList.map(({ title, url }) => {
        return (
          <div key={url} className='text-white text-left'>
            <a href={url} target='_blank' className='pr-1'>
              {title}
            </a>
            <Button name='X' className='text-red-300' />
          </div>
        );
      })}
      <div className='flex flex-col items-start'>
        Add New Bookmarks
        <Link className='text-black bg-blue-300 p-1' href='/bookmark/add'>
          Add
        </Link>
      </div>
    </div>
  );
}

export default Bookmarks;
