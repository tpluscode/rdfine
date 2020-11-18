import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { DryCleaningOrLaundryMixin } from '../lib/DryCleaningOrLaundry';

export const DryCleaningOrLaundryBundle = [
  LocalBusinessMixin as Mixin,
  DryCleaningOrLaundryMixin as Mixin];
