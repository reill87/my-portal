import { Bookmark } from "@/components/Bookmark/Bookmarks";
import * as cheerio from "cheerio";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function POST(request: Request) {
  let result;
  const { title, url }: Bookmark = await request.json();

  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id) {
    return new Response(null, {
      status: 404,
    });
  }

  let faviconUrl = undefined;
  try {
    faviconUrl = await getFaviconInfo(url);
  } catch (e) {
    faviconUrl = "https://github.githubassets.com/favicons/favicon.svg";
    // TODO: handle cannot get faviconUrl
    console.log("catched error @#@@", e);
  } finally {
    result = await supabase.from("bookmark")
      .insert({
        user_id: user?.id,
        title,
        url,
        thumbnail_url: faviconUrl,
      });

    return new Response(null, {
      status: 200,
    });
  }
}

export const getFaviconInfo = async (url: string) => {
  // 웹사이트의 HTML 가져오기
  const response = await fetch(url);
  const html = await response.text();

  // HTML 파싱
  const $ = cheerio.load(html);

  console.log($);

  // <link> 태그에서 favicon 추출
  const faviconLink = $('link[rel="shortcut icon"]').attr("href");

  // <meta> 태그에서도 확인
  const faviconMeta = $('meta[name="msapplication-TileImage"]').attr(
    "content",
  );

  // 적절한 우선순위로 favicon 경로 선택
  const faviconUrl = faviconLink || faviconMeta || "";
  return getValidFaviconUrl(faviconUrl, url);
};

const getValidFaviconUrl = (faviconUrl: string, url: string): string => {
  console.log("faviconUrl", faviconUrl);
  if (faviconUrl === "") {
    throw new Error("cannot get thumbnail_url");
  }
  if (faviconUrl.includes("http") || faviconUrl.includes("//")) {
    return faviconUrl;
  }
  return `${url}/${faviconUrl}`;
};
