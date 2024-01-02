import Image from "next/image";
import Button from "../Button";
import LinkButton from "../LinkButton";
import { getBookmark } from "./getBookmark";
import RandomBackground from "../RandomBackground";
export interface Bookmark {
  id: string;
  title: string;
  url: string;
  thumbnailUrl?: string;
}
function Bookmarks() {
  const bookMarkList: Bookmark[] = getBookmark();

  return (
    <div className="p-10 flex-col justify-center bg-stone-800 text-orange-500 w-full text-center">
      <h2>This is Your book marks</h2>
      {bookMarkList.map(({ id, title, url, thumbnailUrl }) => {
        return (
          <div
            key={url}
            className="flex justify-between text-white text-left mt-2 border-2 p-2 mr-3"
          >
            <a
              href={url}
              target="_blank"
              className="flex items-center pr-3 hover:text-blue-500"
            >
              {thumbnailUrl ? (
                <img className="p-0.5 w-7 h-7" src={thumbnailUrl} alt={title} />
              ) : (
                // <Image width={20} height={20} alt={title} src={thumbnailUrl} />
                <></>
              )}{" "}
              ✈️
              <span>{title}</span>
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
                name={"Edit"}
                className={"mr-3"}
              />
              <DeleteButton id={id} name='delete' className='text-red-300' />
            </div>
          </div>
        );
      })}
      <div className="flex flex-col items-start mt-3">
        <div className="mt-3">
          <LinkButton href={"/bookmark/add"} name={"Add"} className={"mr-5"} />
        </div>
      </div>
      <RandomBackground />
    </div>
  );
}

export default Bookmarks;
