import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentInfluenceMixin } from '../lib/AgentInfluence';
import { AssociationMixin } from '../lib/Association';
import { PlanMixin } from '../lib/Plan';
import { RoleMixin } from '../lib/Role';

export const AssociationBundle = [
  AgentInfluenceMixin as Mixin,
  AssociationMixin as Mixin,
  PlanMixin as Mixin,
  RoleMixin as Mixin];
