import { ProductFeatures } from './product-features';

export interface ProductBenefits {
  id: string;
  title: string;
  subtitle: string;
  featureList: ProductFeatures[];
}
