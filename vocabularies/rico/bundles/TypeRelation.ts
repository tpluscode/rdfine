import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RelationMixin } from '../lib/Relation.js';
import { ThingMixin } from '../lib/Thing.js';
import { TypeMixin } from '../lib/Type.js';
import { TypeRelationMixin } from '../lib/TypeRelation.js';

export const TypeRelationBundle = [
  RelationMixin as Mixin,
  ThingMixin as Mixin,
  TypeMixin as Mixin,
  TypeRelationMixin as Mixin];
