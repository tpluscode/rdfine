import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { AgentMixin } from '../lib/Agent';
import { MandateMixin } from '../lib/Mandate';
import { MandateRelationMixin } from '../lib/MandateRelation';
import { RuleRelationMixin } from '../lib/RuleRelation';

export const MandateRelationBundle = [
  ActivityMixin as Mixin,
  AgentMixin as Mixin,
  MandateMixin as Mixin,
  MandateRelationMixin as Mixin,
  RuleRelationMixin as Mixin];
