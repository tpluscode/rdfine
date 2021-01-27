import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InfluenceMixin } from '../lib/Influence';
import { AgentMixin } from '../lib/Agent';
import { AgentInfluenceMixin } from '../lib/AgentInfluence';

export const AgentInfluenceBundle = [
  InfluenceMixin as Mixin,
  AgentMixin as Mixin,
  AgentInfluenceMixin as Mixin];
