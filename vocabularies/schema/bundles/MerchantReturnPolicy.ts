import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { MerchantReturnPolicyMixin } from '../MerchantReturnPolicy';

export const MerchantReturnPolicyBundle = [
  IntangibleMixin as Mixin,
  MerchantReturnPolicyMixin as Mixin];
