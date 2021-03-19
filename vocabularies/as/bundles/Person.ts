import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectMixin } from '../lib/Object';
import { PersonMixin } from '../lib/Person';

export const PersonBundle = [
  ObjectMixin as Mixin,
  PersonMixin as Mixin];
