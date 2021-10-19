import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { MerchantReturnPolicyMixin } from '../lib/MerchantReturnPolicy';
import { PropertyValueMixin } from '../lib/PropertyValue';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { CountryMixin } from '../lib/Country';
import { MerchantReturnPolicySeasonalOverrideMixin } from '../lib/MerchantReturnPolicySeasonalOverride';

export const MerchantReturnPolicyBundle = [
  IntangibleMixin as Mixin,
  MerchantReturnPolicyMixin as Mixin,
  PropertyValueMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  CountryMixin as Mixin,
  MerchantReturnPolicySeasonalOverrideMixin as Mixin];
