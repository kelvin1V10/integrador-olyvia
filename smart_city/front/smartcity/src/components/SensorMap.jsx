import mapa from '../assets/mapa.webp';

export default function SensorMap() {
  return (
    <div className="flex justify-center mt-20">
      <img
        src={mapa}
        alt="Mapa com Sensores"
        className="rounded-xl shadow-lg w-[40%] max-w-15xl cursor-pointer"
      />
    </div>
  );
}
