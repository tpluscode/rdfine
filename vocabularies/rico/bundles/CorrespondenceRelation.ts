import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CorrespondenceRelationMixin } from '../lib/CorrespondenceRelation';
import { KnowingRelationMixin } from '../lib/KnowingRelation';
import { PersonMixin } from '../lib/Person';

export const CorrespondenceRelationBundle = [
  CorrespondenceRelationMixin as Mixin,
  KnowingRelationMixin as Mixin,
  PersonMixin as Mixin];
