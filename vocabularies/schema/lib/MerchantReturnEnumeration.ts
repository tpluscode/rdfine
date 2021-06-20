import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  MerchantReturnFiniteReturnWindow: schema.MerchantReturnFiniteReturnWindow as NamedNode<'http://schema.org/MerchantReturnFiniteReturnWindow'>,
  MerchantReturnNotPermitted: schema.MerchantReturnNotPermitted as NamedNode<'http://schema.org/MerchantReturnNotPermitted'>,
  MerchantReturnUnlimitedWindow: schema.MerchantReturnUnlimitedWindow as NamedNode<'http://schema.org/MerchantReturnUnlimitedWindow'>,
  MerchantReturnUnspecified: schema.MerchantReturnUnspecified as NamedNode<'http://schema.org/MerchantReturnUnspecified'>,
};

export type MerchantReturnEnumeration =
  NamedNode<'http://schema.org/MerchantReturnFiniteReturnWindow'>
  | NamedNode<'http://schema.org/MerchantReturnNotPermitted'>
  | NamedNode<'http://schema.org/MerchantReturnUnlimitedWindow'>
  | NamedNode<'http://schema.org/MerchantReturnUnspecified'>;
