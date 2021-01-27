import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentInfluenceMixin } from '../lib/AgentInfluence';
import { PlanMixin } from '../lib/Plan';
import { RoleMixin } from '../lib/Role';
import { AssociationMixin } from '../lib/Association';

export const AssociationBundle = [
  AgentInfluenceMixin as Mixin,
  PlanMixin as Mixin,
  RoleMixin as Mixin,
  AssociationMixin as Mixin];
