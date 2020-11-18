import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { MerchantReturnPolicyMixin } from '../lib/MerchantReturnPolicy';

export const MerchantReturnPolicyBundle = [
  IntangibleMixin as Mixin,
  MerchantReturnPolicyMixin as Mixin];
