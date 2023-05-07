import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent.js';
import { AgentOriginationRelationMixin } from '../lib/AgentOriginationRelation.js';
import { CreationRelationMixin } from '../lib/CreationRelation.js';
import { InstantiationMixin } from '../lib/Instantiation.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';
import { RoleTypeMixin } from '../lib/RoleType.js';

export const CreationRelationBundle = [
  AgentMixin as Mixin,
  AgentOriginationRelationMixin as Mixin,
  CreationRelationMixin as Mixin,
  InstantiationMixin as Mixin,
  RecordResourceMixin as Mixin,
  RoleTypeMixin as Mixin];
