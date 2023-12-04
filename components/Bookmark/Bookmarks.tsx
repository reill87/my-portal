import Button from '../Button';
import Link from 'next/link';
import LinkButton from '../LinkButton';

export interface Bookmark {
  id: number;
  title: string;
  url: string;
  thumbnailUrl?: string;
}
function Bookmarks() {
  const bookMarkList: Bookmark[] = [
    {
      id: 0,
      title: 'Naver',
      url: 'https://naver.com',
    },
    { id: 1, title: 'Daum', url: 'https://daum.net' },
  ];

  const setEditData = ({ title, url }: Bookmark) => {
    console.log(title, url);
  };

  return (
    <div className='p-10 flex-col justify-center bg-stone-800 text-orange-500 w-full text-center'>
      <h2>This is Your book marks</h2>
      {bookMarkList.map(({ id, title, url }) => {
        return (
          <div
            key={url}
            className='text-white text-left mt-2 border-2 p-2 mr-3'
          >
            <a href={url} target='_blank' className='pr-3 hover:text-blue-500'>
              {title} ➡️✈️➡️ ({url})
            </a>
            <LinkButton
              href={{
                pathname: '/bookmark/edit',
                query: {
                  id,
                  title,
                  url,
                },
              }}
              name={'Edit'}
              className={'mr-3'}
            />
            <Button name='delete' className='text-red-300 ' />
          </div>
        );
      })}
      <div className='flex flex-col items-start mt-3'>
        <div className='mt-3'>
          <LinkButton href={'/bookmark/add'} name={'Add'} className={'mr-5'} />
        </div>
      </div>
    </div>
  );
}

export default Bookmarks;
