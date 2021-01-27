import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentInfluenceMixin } from '../lib/AgentInfluence';
import { AttributionMixin } from '../lib/Attribution';

export const AttributionBundle = [
  AgentInfluenceMixin as Mixin,
  AttributionMixin as Mixin];
