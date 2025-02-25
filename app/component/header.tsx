export default function Header(){
    return (
        <div className='relative isolate overflow-hidden cover h-full py-24 sm:py-32'>
        <img src="/cover1.png" alt="baby" className='absolute inset-0 -z-10 size-full object-cover object-right md:object-center'/>
        <div className="text-center mb-3">
          <h1 className="text-3xl font-bold text-white">Agathe Polet</h1>
          <p className="text-white mb-2">Ostéopathe D.O</p>
          <span className="text-white">DIPLOMÉE DE L&apos;ULB — SPÉCIALISÉE EN PÉDIATRIE — PRÉ ET POST-PARTUM</span>
        </div>
        <div className='text-center'>
          <h1>
          <a href="https://www.doctoranytime.be/d/osteopathe/polet-agathe" type='button' className='btn btn-rose'>Prendre rendez-vous en ligne</a>
          </h1>
        </div>
      </div>
    )
}  