import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InstantiationMixin } from '../lib/Instantiation';
import { InstantiationToInstantiationRelationMixin } from '../lib/InstantiationToInstantiationRelation';
import { RelationMixin } from '../lib/Relation';

export const InstantiationToInstantiationRelationBundle = [
  InstantiationMixin as Mixin,
  InstantiationToInstantiationRelationMixin as Mixin,
  RelationMixin as Mixin];
