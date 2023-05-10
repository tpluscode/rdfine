import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity.js';
import { AgentMixin } from '../lib/Agent.js';
import { MandateMixin } from '../lib/Mandate.js';
import { MandateRelationMixin } from '../lib/MandateRelation.js';
import { RuleRelationMixin } from '../lib/RuleRelation.js';

export const MandateRelationBundle = [
  ActivityMixin as Mixin,
  AgentMixin as Mixin,
  MandateMixin as Mixin,
  MandateRelationMixin as Mixin,
  RuleRelationMixin as Mixin];
