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

  return (
    <div className='p-10 flex-col justify-center bg-stone-800 text-orange-500 w-full'>
      <h2>This is Your book marks</h2>
      {bookMarkList.map(({ title, url }) => {
        return (
          <div key={url} className='text-white text-left'>
            <a href={url} target='_blank'>
              {title}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Bookmarks;
