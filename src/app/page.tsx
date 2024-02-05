import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/task1">Task 1</Link>
      <Link href="/task2">Task 2</Link>
      <Link href="/task3">Task 3</Link>
      <Link href="/task4">Task 4</Link>
      <Link href="/task5">Task 5</Link>
      <Link href="/task6">Task 6</Link>
      <Link href="/task7">Task 7</Link>
      <Link href="/task8">Task 8</Link>
    </div>
  );
}

