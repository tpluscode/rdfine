import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { GovernmentOfficeMixin } from '../GovernmentOffice';

export const GovernmentOfficeBundle = [
  LocalBusinessMixin as Mixin,
  GovernmentOfficeMixin as Mixin];
