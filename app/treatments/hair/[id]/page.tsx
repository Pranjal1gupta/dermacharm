import { services } from '@/lib/data';
import HairTreatmentContent from './HairTreatmentContent';

export function generateStaticParams() {
  return services
    .filter(service => service.category === 'Hair')
    .map(service => ({
      id: service.id,
    }));
}

export default function HairTreatmentPage({ params }: { params: { id: string } }) {
  return <HairTreatmentContent id={params.id} />;
}
