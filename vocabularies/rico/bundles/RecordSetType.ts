import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RecordSetMixin } from '../lib/RecordSet';
import { RecordSetTypeMixin } from '../lib/RecordSetType';
import { TypeMixin } from '../lib/Type';

export const RecordSetTypeBundle = [
  RecordSetMixin as Mixin,
  RecordSetTypeMixin as Mixin,
  TypeMixin as Mixin];
