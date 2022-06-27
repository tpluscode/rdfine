import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentInfluenceMixin } from '../lib/AgentInfluence';
import { AgentMixin } from '../lib/Agent';
import { InfluenceMixin } from '../lib/Influence';

export const AgentInfluenceBundle = [
  AgentInfluenceMixin as Mixin,
  AgentMixin as Mixin,
  InfluenceMixin as Mixin];
