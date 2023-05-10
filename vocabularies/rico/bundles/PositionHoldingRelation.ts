import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation.js';
import { PersonMixin } from '../lib/Person.js';
import { PositionHoldingRelationMixin } from '../lib/PositionHoldingRelation.js';
import { PositionMixin } from '../lib/Position.js';

export const PositionHoldingRelationBundle = [
  AgentToAgentRelationMixin as Mixin,
  PersonMixin as Mixin,
  PositionHoldingRelationMixin as Mixin,
  PositionMixin as Mixin];
