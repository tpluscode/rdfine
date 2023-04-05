import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConceptMixin } from '../lib/Concept';
import { RecordSetMixin } from '../lib/RecordSet';
import { ThingMixin } from '../lib/Thing';
import { TypeMixin } from '../lib/Type';
import { TypeRelationMixin } from '../lib/TypeRelation';

export const TypeBundle = [
  ConceptMixin as Mixin,
  RecordSetMixin as Mixin,
  ThingMixin as Mixin,
  TypeMixin as Mixin,
  TypeRelationMixin as Mixin];
