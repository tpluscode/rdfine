import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DatatypeMixin } from '../lib/Datatype';
import { DirectionMixin } from '../lib/Direction';
import { TransformationMixin } from '../lib/Transformation';
import { ColumnMixin } from '../lib/Column';

export const ColumnBundle = [
  DatatypeMixin as Mixin,
  DirectionMixin as Mixin,
  TransformationMixin as Mixin,
  ColumnMixin as Mixin];
