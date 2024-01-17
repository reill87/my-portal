import { getFaviconInfo } from "../add/route";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { randomBytes, UUID } from "crypto";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const bookMark = await request.json();
  const faviconUrl = await getFaviconInfo(bookMark.url);

  console.log(bookMark.id as UUID);

  let result;

  try {
    if (faviconUrl) {
      result = await supabase.from("bookmark").update({
        ...bookMark,
        thumbnail_url: faviconUrl,
      }).eq("id", bookMark.id as UUID);
    } else {
      result = await supabase.from("bookmark").update({
        ...bookMark,
      }).eq("id", bookMark.id as UUID);
    }
  } catch (e) {
    console.log("error", e);
    return new Response(null, {
      status: 404,
    });
  }

  console.log("result", result);

  return new Response(null, {
    status: 200,
  });
}
