import { useEffect, useState } from 'react';
import { Data } from '@models/data';
import dataService from '@services/data-service';

export default function App() {
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setData(await dataService.loadData());
    };
    fetchData();
  }, []);
  return <div className="text-green-900 text-3xl">Odunlami Zacchaeus</div>;
}
