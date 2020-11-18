import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ReactActionMixin } from '../lib/ReactAction';
import { EndorseActionMixin } from '../lib/EndorseAction';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const EndorseActionBundle = [
  ReactActionMixin as Mixin,
  EndorseActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
