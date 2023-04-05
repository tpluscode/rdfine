import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { AgentNameMixin } from '../lib/AgentName';
import { NameMixin } from '../lib/Name';

export const AgentNameBundle = [
  AgentMixin as Mixin,
  AgentNameMixin as Mixin,
  NameMixin as Mixin];
