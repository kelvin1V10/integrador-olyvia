import { Thermometer, Droplet, Network, AlertTriangle } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="flex ">
        <Sidebar />
        <div className="p-6 flex flex-wrap gap-6 h-20 mt-5 mx-auto">
          <DashboardCard icon={<Thermometer />} label="Temperatura Média" value={23} unit="°C" />
          <DashboardCard icon={<Droplet />} label="Umidade Média" value={65} unit="%" />
          <DashboardCard icon={<Network />} label="Sensores ativos" value={4} unit="" />
          <DashboardCard icon={<AlertTriangle />} label="Alertas ativos" value={2} unit="" color="text-red-600" />
        </div>
    </div>
  );
}
