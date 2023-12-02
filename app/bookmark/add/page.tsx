export default function Home() {
  return (
    <>
      <h2>Add Bookmarks</h2>
      <div className='w-full max-w-xs'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              htmlFor Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Name'
            />
          </div>
          <div>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='url'
            >
              url
            </label>
            <input
              className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='url'
              type='text'
              placeholder='url'
            />
          </div>
        </form>
      </div>
    </>
  );
}
