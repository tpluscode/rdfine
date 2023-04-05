import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { AgentInfluenceMixin } from '../lib/AgentInfluence';
import { DelegationMixin } from '../lib/Delegation';

export const DelegationBundle = [
  ActivityMixin as Mixin,
  AgentInfluenceMixin as Mixin,
  DelegationMixin as Mixin];
