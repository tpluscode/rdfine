import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { AgentMixin } from '../lib/Agent';
import { DelegationMixin } from '../lib/Delegation';
import { EntityMixin } from '../lib/Entity';
import { InfluenceMixin } from '../lib/Influence';
import { LocationMixin } from '../lib/Location';

export const AgentBundle = [
  ActivityMixin as Mixin,
  AgentMixin as Mixin,
  DelegationMixin as Mixin,
  EntityMixin as Mixin,
  InfluenceMixin as Mixin,
  LocationMixin as Mixin];
