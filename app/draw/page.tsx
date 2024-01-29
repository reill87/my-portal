import List from '@/components/Tldraw/List';

export default function Home() {
  const src =
    'https://www.tldraw.com/r/KZDHhyrHMulMjJDCyFpp9?viewport=-281,-453,2511,1365&page=page:ERl5bKqBsRdtqNQMz9oUE';
  return (
    <>
      <List src={src} />
    </>
  );
}
