import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReactActionMixin } from '../ReactAction';
import { EndorseActionMixin } from '../EndorseAction';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const EndorseActionBundle = [
  ReactActionMixin as Mixin,
  EndorseActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
