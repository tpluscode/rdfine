import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation';
import { PersonMixin } from '../lib/Person';
import { PositionHoldingRelationMixin } from '../lib/PositionHoldingRelation';
import { PositionMixin } from '../lib/Position';

export const PositionHoldingRelationBundle = [
  AgentToAgentRelationMixin as Mixin,
  PersonMixin as Mixin,
  PositionHoldingRelationMixin as Mixin,
  PositionMixin as Mixin];
