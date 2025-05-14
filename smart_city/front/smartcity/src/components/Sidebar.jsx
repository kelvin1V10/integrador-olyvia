import { BarChart, Thermometer, MapPin, Power, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="bg-gradient-to-b from-blue-800 to-black text-white w-60 h-screen p-4 flex flex-col justify-between rounded">
      <div>
        <div className="flex items-center mb-10">
          <div className="text-4xl mr-2">🤖</div>
          <h1 className="text-xl font-bold">SmartMange</h1>
        </div>

        <nav className="space-y-4">
          <NavItem icon={<BarChart />} label="Dash Boards" />
          <NavItem icon={<Ruler />} label="Sensores" />
          <NavItem icon={<MapPin />} label="Mapa" />
        </nav>
      </div>

        <button
            className="cursor-pointer flex items-center space-x-2 text-white hover:text-red-500"
            onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
            }}
        >
        <Power />
        <span>Log-out</span>
      </button>
    </div>
  );
}

function NavItem({ icon, label }) {
  return (
    <div className="flex items-center space-x-3 px-4 py-2 hover:bg-blue-700 rounded cursor-pointer">
      {icon}
      <span>{label}</span>
    </div>
  );
}
