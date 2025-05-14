export default function SensorChart({ title, icon }) {
    return (
      <div className="flex flex-col items-center w-44">
        <h3 className="text-sm font-medium mb-1">{title}</h3>
        <div className="w-20 h-20 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-lg shadow p-2"> {/* Adicionei o p-2 para um pouco de padding */}
          <div className="text-4xl text-gray-700">{icon}</div>
        </div>
      </div>
    );
  }
  