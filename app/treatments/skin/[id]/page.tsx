import { services } from '@/lib/data';
import SkinTreatmentContent from './SkinTreatmentContent';

export function generateStaticParams() {
  return services
    .filter(service => service.category === 'Skin')
    .map(service => ({
      id: service.id,
    }));
}

export default function SkinTreatmentPage({ params }: { params: { id: string } }) {
  return <SkinTreatmentContent id={params.id} />;
}
