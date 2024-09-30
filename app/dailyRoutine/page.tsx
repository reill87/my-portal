import DailyRoutineList from '@/components/DailyRoutine/List';

export default async function Home() {
  const dailyRoutineList = await fetch('/api/dailyRoutine/list');

  console.log('dailyRoutineList', dailyRoutineList);

  return (
    <>
      <DailyRoutineList />
    </>
  );
}
