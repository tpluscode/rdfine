import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentHierarchicalRelationMixin } from '../lib/AgentHierarchicalRelation';
import { GroupMixin } from '../lib/Group';
import { GroupSubdivisionRelationMixin } from '../lib/GroupSubdivisionRelation';
import { WholePartRelationMixin } from '../lib/WholePartRelation';

export const GroupSubdivisionRelationBundle = [
  AgentHierarchicalRelationMixin as Mixin,
  GroupMixin as Mixin,
  GroupSubdivisionRelationMixin as Mixin,
  WholePartRelationMixin as Mixin];
