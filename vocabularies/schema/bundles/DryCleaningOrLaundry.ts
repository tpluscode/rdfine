import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DryCleaningOrLaundryMixin } from '../lib/DryCleaningOrLaundry';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const DryCleaningOrLaundryBundle = [
  DryCleaningOrLaundryMixin as Mixin,
  LocalBusinessMixin as Mixin];
