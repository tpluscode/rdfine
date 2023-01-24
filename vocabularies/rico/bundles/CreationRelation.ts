import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { AgentOriginationRelationMixin } from '../lib/AgentOriginationRelation';
import { CreationRelationMixin } from '../lib/CreationRelation';
import { InstantiationMixin } from '../lib/Instantiation';
import { RecordResourceMixin } from '../lib/RecordResource';
import { RoleTypeMixin } from '../lib/RoleType';

export const CreationRelationBundle = [
  AgentMixin as Mixin,
  AgentOriginationRelationMixin as Mixin,
  CreationRelationMixin as Mixin,
  InstantiationMixin as Mixin,
  RecordResourceMixin as Mixin,
  RoleTypeMixin as Mixin];
