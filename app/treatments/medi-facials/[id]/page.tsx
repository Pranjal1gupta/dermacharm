import { services } from '@/lib/data';
import MediFacialContent from './MediFacialContent';

export function generateStaticParams() {
  return services
    .filter(service => service.category === 'Medi Facials')
    .map(service => ({
      id: service.id,
    }));
}

export default function MediFacialPage({ params }: { params: { id: string } }) {
  return <MediFacialContent id={params.id} />;
}
