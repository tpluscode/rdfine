import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GovernmentOfficeMixin } from '../lib/GovernmentOffice';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const GovernmentOfficeBundle = [
  GovernmentOfficeMixin as Mixin,
  LocalBusinessMixin as Mixin];
