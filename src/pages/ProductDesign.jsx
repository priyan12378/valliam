import ProductDesignHero from '../components/product-design/ProductDesignHero';
import ProductDesignTimeline from '../components/product-design/ProductDesignTimeline';
import ProductDesignServices from '../components/product-design/ProductDesignServices';
import ProductDesignCoverage from '../components/product-design/ProductDesignCoverage';
import ProductDesignTools from '../components/product-design/ProductDesignTools';

export default function ProductDesign() {
  return (
    <main className="bg-white overflow-hidden pt-20">
      <ProductDesignHero />
      <ProductDesignTimeline />
      <ProductDesignServices />
      <ProductDesignCoverage />
      <ProductDesignTools />
    </main>
  );
}