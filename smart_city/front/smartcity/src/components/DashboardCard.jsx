export default function DashboardCard({ icon, label, value, unit, color = "text-black" }) {
    return (
      <div className="bg-white shadow-md rounded-xl p-4 flex items-center space-x-4 min-w-[180px]">
        <div className="text-blue-500 text-3xl">{icon}</div>
        <div>
          <p className="text-sm">{label}</p>
          <p className={`text-xl font-bold ${color}`}>{value} {unit}</p>
        </div>
      </div>
    );
  }
  