import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent.js';
import { MandateMixin } from '../lib/Mandate.js';
import { MandateRelationMixin } from '../lib/MandateRelation.js';
import { RuleMixin } from '../lib/Rule.js';

export const MandateBundle = [
  AgentMixin as Mixin,
  MandateMixin as Mixin,
  MandateRelationMixin as Mixin,
  RuleMixin as Mixin];
