import { GetStaticProps, InferGetStaticPropsType } from "next";

export default function Welcome() {
  const timestamp = new Date().toLocaleTimeString();
  return (
    <div>
      <p>{timestamp}에 접속하셨네요!</p>
    </div>
  );
}

// next 13 부터는 서버사이드 api 가 더이상 사용되지 않음!_!
// "getStaticProps" is not supported in app/. Read more: https://nextjs.org/docs/app/building-your-application/data-fetching
// export const getStaticProps = (async (context) => {
//   const timestamp = new Date().toLocaleTimeString();
//   const message = `${timestamp}: 에 빌드 되었습니다.`;

//   return {
//     props: {
//       message,
//     },
//   };
// }) satisfies GetStaticProps<{
//   message: WelcomeMessage;
// }>;
