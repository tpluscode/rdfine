import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentInfluenceMixin } from '../lib/AgentInfluence';
import { ActivityMixin } from '../lib/Activity';
import { DelegationMixin } from '../lib/Delegation';

export const DelegationBundle = [
  AgentInfluenceMixin as Mixin,
  ActivityMixin as Mixin,
  DelegationMixin as Mixin];
