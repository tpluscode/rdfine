import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { MandateMixin } from '../lib/Mandate';
import { MandateRelationMixin } from '../lib/MandateRelation';
import { RuleMixin } from '../lib/Rule';

export const MandateBundle = [
  AgentMixin as Mixin,
  MandateMixin as Mixin,
  MandateRelationMixin as Mixin,
  RuleMixin as Mixin];
