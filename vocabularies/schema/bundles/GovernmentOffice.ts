import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { GovernmentOfficeMixin } from '../lib/GovernmentOffice';

export const GovernmentOfficeBundle = [
  LocalBusinessMixin as Mixin,
  GovernmentOfficeMixin as Mixin];
