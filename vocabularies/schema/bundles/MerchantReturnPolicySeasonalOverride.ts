import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { MerchantReturnPolicySeasonalOverrideMixin } from '../lib/MerchantReturnPolicySeasonalOverride';

export const MerchantReturnPolicySeasonalOverrideBundle = [
  IntangibleMixin as Mixin,
  MerchantReturnPolicySeasonalOverrideMixin as Mixin];
