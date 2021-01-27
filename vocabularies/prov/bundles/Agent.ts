import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { LocationMixin } from '../lib/Location';
import { DelegationMixin } from '../lib/Delegation';
import { InfluenceMixin } from '../lib/Influence';
import { ActivityMixin } from '../lib/Activity';
import { EntityMixin } from '../lib/Entity';

export const AgentBundle = [
  AgentMixin as Mixin,
  LocationMixin as Mixin,
  DelegationMixin as Mixin,
  InfluenceMixin as Mixin,
  ActivityMixin as Mixin,
  EntityMixin as Mixin];
