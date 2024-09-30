'use client';

import DailyRoutineList from '@/components/DailyRoutine/List';
import { swr_fetcher } from '@/lib/utils';
import useSWR from 'swr';

export default function Home() {
  const { data, error, isLoading } = useSWR(
    '/api/dailyRoutine/list',
    swr_fetcher
  );

  return <>{data && <DailyRoutineList />}</>;
}
