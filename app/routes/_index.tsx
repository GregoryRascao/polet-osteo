import type { MetaFunction } from '@remix-run/node';
import Header from '../component/header';
import Info from '../component/info';
import Localisation from '../component/localisation';

export const meta: MetaFunction = () => {
  return [
    { title: 'Agathe Polet' },
    { name: 'description', content: 'Ostéopathe Forest/Etterbeek' },
  ];
};

export default function Index() {
  return (
    <div>
      <Header></Header>
      <Info></Info>
      <Localisation></Localisation>
    </div>
  );
}
