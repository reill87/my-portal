import { Bookmark } from '@/components/Bookmark/Bookmarks';
import { setBookmark } from '@/app/services/BookMark';
import * as cheerio from 'cheerio';

export async function POST(request: Request) {
  const { id, title, url }: Bookmark = await request.json();

  const faviconUrl = await getFaviconInfo(url);

  console.log(faviconUrl);

  if (faviconUrl) {
    setBookmark({
      id,
      title,
      url,
      thumbnailUrl: getValidFaviconUrl(faviconUrl, url),
    });
  } else {
    // TODO: handle cannot get faviconUrl
    setBookmark({
      id,
      title,
      url,
      thumbnailUrl: 'https://github.githubassets.com/favicons/favicon.svg',
    });
  }

  return new Response(null, {
    status: 200,
  });
}

export const getFaviconInfo = async (url: string) => {
  try {
    // 웹사이트의 HTML 가져오기
    const response = await fetch(url);
    const html = await response.text();

    // HTML 파싱
    const $ = cheerio.load(html);

    console.log($);

    // <link> 태그에서 favicon 추출
    const faviconLink = $('link[rel="shortcut icon"]').attr('href');

    // <meta> 태그에서도 확인
    const faviconMeta = $('meta[name="msapplication-TileImage"]').attr(
      'content'
    );

    // 적절한 우선순위로 favicon 경로 선택
    const faviconUrl = faviconLink || faviconMeta || '';
    return getValidFaviconUrl(faviconUrl, url);
  } catch (error) {
    console.error('Error fetching favicon:', error);
  }
};

const getValidFaviconUrl = (faviconUrl: string, url: string): string => {
  if (faviconUrl.includes('http')) {
    return faviconUrl;
  }
  return `${url}/${faviconUrl}`;
};
