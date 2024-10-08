// pages/index.js
import Head from 'next/head';
import BarChart from './components/BarGraph';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>South Asian Countries Population</title>
      </Head>
      <BarChart />
    </div>
  );
}
