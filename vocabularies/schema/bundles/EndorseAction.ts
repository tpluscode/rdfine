import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EndorseActionMixin } from '../lib/EndorseAction';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { ReactActionMixin } from '../lib/ReactAction';

export const EndorseActionBundle = [
  EndorseActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ReactActionMixin as Mixin];
