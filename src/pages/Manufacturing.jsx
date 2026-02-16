import ManufacturingHero from '../components/manufacturing/ManufacturingHero';
import ManufacturingTimeline from '../components/manufacturing/ManufacturingTimeline';
import ManufacturingServices from '../components/manufacturing/ManufacturingServices';
import ManufacturingCoverage from '../components/manufacturing/ManufacturingCoverage';
import ManufacturingTools from '../components/manufacturing/ManufacturingTools';

export default function Manufacturing() {
  return (
    <main className="bg-white overflow-hidden pt-20">
      <ManufacturingHero />
      <ManufacturingTimeline />
      <ManufacturingServices />
      <ManufacturingCoverage />
      <ManufacturingTools />
    </main>
  );
}