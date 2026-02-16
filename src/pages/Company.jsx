import CompanyAbout from '../components/company/CompanyAbout';
import CompanyWhatWeDo from '../components/company/CompanyWhatWeDo';
import CompanyVision from '../components/company/CompanyVision';
import CompanyMission from '../components/company/CompanyMission';
import CompanyAdvantages from '../components/company/CompanyAdvantages';
import CompanyRoadmap from '../components/company/CompanyRoadmap';

export default function Company() {
  return (
    // REMOVED "pt-20" here. Now it starts directly after the Navbar.
    <main className="bg-white overflow-hidden">
      <CompanyAbout />
      <CompanyWhatWeDo />
      <CompanyVision />
      <CompanyMission />
      <CompanyAdvantages />
      <CompanyRoadmap />
    </main>
  );
}