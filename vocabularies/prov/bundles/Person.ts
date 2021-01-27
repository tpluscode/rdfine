import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { PersonMixin } from '../lib/Person';

export const PersonBundle = [
  AgentMixin as Mixin,
  PersonMixin as Mixin];
