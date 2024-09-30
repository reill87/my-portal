'use client';

import DailyRoutineList from '@/components/DailyRoutine/List';
import { DailyRoutine } from '@/components/DailyRoutine/type';
import { swr_fetcher } from '@/lib/utils';
import useSWR from 'swr';

export default function Home() {
  const { data, error, isLoading } = useSWR<DailyRoutine[]>(
    '/api/dailyRoutine/list',
    swr_fetcher
  );

  console.log(data);

  return <>{data && <DailyRoutineList data={data} />}</>;
}
