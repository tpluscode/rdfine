import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { DryCleaningOrLaundryMixin } from '../DryCleaningOrLaundry';

export const DryCleaningOrLaundryBundle = [
  LocalBusinessMixin as Mixin,
  DryCleaningOrLaundryMixin as Mixin];
