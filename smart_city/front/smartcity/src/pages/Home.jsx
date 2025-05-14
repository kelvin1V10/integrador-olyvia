import { Thermometer, Droplet, Network, AlertTriangle, Sun, Circle } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';
import Sidebar from '../components/Sidebar';
import SensorChart from '../components/SensorChart';
import SensorMap from '../components/SensorMap';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex flex-wrap gap-10 mt-9 justify-center">
          <DashboardCard icon={<Thermometer />} label="Temperatura Média" value={23} unit="°C" />
          <DashboardCard icon={<Droplet />} label="Umidade Média" value={65} unit="%" />
          <DashboardCard icon={<Network />} label="Sensores ativos" value={4} unit="" />
          <DashboardCard icon={<AlertTriangle />} label="Alertas ativos" value={2} unit="" color="text-red-600" />
        </div>

        <div className="flex flex-wrap justify-center gap-0 justify-items-center mt-10">
          <SensorChart title="Luminosidade" icon={<Sun />} />
          <SensorChart title="Contador" icon={<Circle />} />
          <SensorChart title="Umidade" icon={<Droplet />} />
          <SensorChart title="Temperatura" icon={<Thermometer />} />
        </div>

        <SensorMap />
      </div>
    </div>
  );
}
