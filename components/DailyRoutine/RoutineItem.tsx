interface RoutineItem {
  id: string;
  isChecked: boolean;
  name: string;
  memo: string;
}

interface ListProps {
  routines: RoutineItem[];
}

export default function RoutineItem({ routines }: ListProps) {
  return (
    <ul>
      {routines.map((routine) => {
        return (
          <li key={routine.id}>
            <span>{routine.isChecked}</span>
            <span>{routine.name}</span>
            <span>{routine.memo}</span>
          </li>
        );
      })}
    </ul>
  );
}
