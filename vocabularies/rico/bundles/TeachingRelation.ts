import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { KnowingRelationMixin } from '../lib/KnowingRelation';
import { PersonMixin } from '../lib/Person';
import { TeachingRelationMixin } from '../lib/TeachingRelation';

export const TeachingRelationBundle = [
  KnowingRelationMixin as Mixin,
  PersonMixin as Mixin,
  TeachingRelationMixin as Mixin];
