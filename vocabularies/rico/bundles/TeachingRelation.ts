import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { KnowingRelationMixin } from '../lib/KnowingRelation.js';
import { PersonMixin } from '../lib/Person.js';
import { TeachingRelationMixin } from '../lib/TeachingRelation.js';

export const TeachingRelationBundle = [
  KnowingRelationMixin as Mixin,
  PersonMixin as Mixin,
  TeachingRelationMixin as Mixin];
