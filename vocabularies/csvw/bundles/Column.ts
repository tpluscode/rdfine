import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ColumnMixin } from '../lib/Column';
import { DatatypeMixin } from '../lib/Datatype';
import { DirectionMixin } from '../lib/Direction';
import { TransformationMixin } from '../lib/Transformation';

export const ColumnBundle = [
  ColumnMixin as Mixin,
  DatatypeMixin as Mixin,
  DirectionMixin as Mixin,
  TransformationMixin as Mixin];
