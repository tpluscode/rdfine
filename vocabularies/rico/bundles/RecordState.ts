import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RecordMixin } from '../lib/Record';
import { RecordPartMixin } from '../lib/RecordPart';
import { RecordSetMixin } from '../lib/RecordSet';
import { RecordStateMixin } from '../lib/RecordState';
import { TypeMixin } from '../lib/Type';

export const RecordStateBundle = [
  RecordMixin as Mixin,
  RecordPartMixin as Mixin,
  RecordSetMixin as Mixin,
  RecordStateMixin as Mixin,
  TypeMixin as Mixin];
