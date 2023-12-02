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
    <div className='p-10 flex-col justify-center bg-stone-800 text-orange-500'>
      <h2>This is Your book marks</h2>
      {bookMarkList.map(({ title, url }) => {
        return (
          <div key={url} className='text-white text-center'>
            <a href={url}>{title}</a>
          </div>
        );
      })}
    </div>
  );
}

export default Bookmarks;
