import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CountryMixin } from '../lib/Country';
import { IntangibleMixin } from '../lib/Intangible';
import { MerchantReturnPolicyMixin } from '../lib/MerchantReturnPolicy';
import { MerchantReturnPolicySeasonalOverrideMixin } from '../lib/MerchantReturnPolicySeasonalOverride';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { PropertyValueMixin } from '../lib/PropertyValue';

export const MerchantReturnPolicyBundle = [
  CountryMixin as Mixin,
  IntangibleMixin as Mixin,
  MerchantReturnPolicyMixin as Mixin,
  MerchantReturnPolicySeasonalOverrideMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  PropertyValueMixin as Mixin];
