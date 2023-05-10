import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InstantiationMixin } from '../lib/Instantiation.js';
import { InstantiationToInstantiationRelationMixin } from '../lib/InstantiationToInstantiationRelation.js';
import { RelationMixin } from '../lib/Relation.js';

export const InstantiationToInstantiationRelationBundle = [
  InstantiationMixin as Mixin,
  InstantiationToInstantiationRelationMixin as Mixin,
  RelationMixin as Mixin];
