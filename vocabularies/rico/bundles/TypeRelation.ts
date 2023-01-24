import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RelationMixin } from '../lib/Relation';
import { ThingMixin } from '../lib/Thing';
import { TypeMixin } from '../lib/Type';
import { TypeRelationMixin } from '../lib/TypeRelation';

export const TypeRelationBundle = [
  RelationMixin as Mixin,
  ThingMixin as Mixin,
  TypeMixin as Mixin,
  TypeRelationMixin as Mixin];
