import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { PaymentChargeSpecificationMixin } from '../lib/PaymentChargeSpecification';

export const PaymentChargeSpecificationBundle = [
  PriceSpecificationMixin as Mixin,
  PaymentChargeSpecificationMixin as Mixin];
