import Divider from '~/component/divider';

export default function Info() {
  return (
    <div>
      <Divider></Divider>
      <div className="mt-16 grid grid-cols-1  sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <a href={'about'} className="flex flex-col-reverse gap-1 ">
          <img src="/agathe2.jpg" alt="Agathe Polet" />
          <h2 className="text-center">Qui Suis-je ?</h2>
        </a>
        <a href={'about#osteo'} className="flex flex-col-reverse gap-1">
          <img src="/osteo.png" alt="Bone" />
          <h2 className="text-center">L&apos;ostéopathie</h2>
        </a>
        <a href={'about#motif'} className="flex flex-col-reverse gap-1">
          <img src="/pourquoi.png" alt="Question mark" />
          <h2 className="text-center">Motifs de consultations</h2>
        </a>
        <a href={'cabinets'} className="flex flex-col-reverse gap-1">
          <img src="/cabinets.png" alt="Office" />
          <h2 className="text-center">Mes cabinets</h2>
        </a>
      </div>
    </div>
  );
}
