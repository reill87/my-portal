import { UUID, randomBytes } from 'crypto';
import LinkButton from '../LinkButton';
import RandomBackground from '../RandomBackground';
import DeleteButton from './DeleteButton';
import Image from 'next/image';
export interface Bookmark {
  id?: UUID;
  user_id?: UUID;
  title: string;
  url: string;
  thumbnail_url?: string;
}

interface BookMarkListProps {
  bookMarkList: Bookmark[];
}

function Bookmarks({ bookMarkList }: BookMarkListProps) {
  return (
    <div className='p-10 flex-col justify-center w-full text-center'>
      <h2 className='font-semibold text-xl'>This is Your book marks</h2>
      <div className='flex-auto'>
        {bookMarkList.map(({ id, title, url, thumbnail_url }) => {
          return (
            <div
              key={url}
              className='flex justify-between text-black text-left mt-2 border-2 p-2 mr-3 font-bold'
            >
              <a
                href={url}
                target='_blank'
                className='flex items-center pr-3 hover:text-blue-500'
              >
                {thumbnail_url ? (
                  <img
                    className='p-0.5 w-7 h-7'
                    src={thumbnail_url}
                    alt={title}
                  />
                ) : (
                  // <Image width={20} height={20} alt={title} src={thumbnailUrl} />
                  <></>
                )}{' '}
                <span className='pl-2 pr-2'>✈️</span>
                <span className='pl-2'>{title}</span>
              </a>
              <div>
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
                <DeleteButton
                  id={id?.toString() || ''}
                  name='delete'
                  className='text-red-300'
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex flex-col items-start mt-3'>
        <div className='mt-3'>
          <LinkButton href={'/bookmark/add'} name={'Add'} className={'mr-5'} />
        </div>
      </div>
      <RandomBackground />
    </div>
  );
}

export default Bookmarks;
