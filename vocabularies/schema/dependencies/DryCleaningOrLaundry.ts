import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { DryCleaningOrLaundryMixin } from '../DryCleaningOrLaundry';

export const DryCleaningOrLaundryDependencies = [
  LocalBusinessMixin as Mixin,
  DryCleaningOrLaundryMixin as Mixin];
