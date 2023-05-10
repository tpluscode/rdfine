import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CorrespondenceRelationMixin } from '../lib/CorrespondenceRelation.js';
import { KnowingRelationMixin } from '../lib/KnowingRelation.js';
import { PersonMixin } from '../lib/Person.js';

export const CorrespondenceRelationBundle = [
  CorrespondenceRelationMixin as Mixin,
  KnowingRelationMixin as Mixin,
  PersonMixin as Mixin];
