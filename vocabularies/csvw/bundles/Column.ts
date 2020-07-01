import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DatatypeMixin } from '../Datatype';
import { DirectionMixin } from '../Direction';
import { TransformationMixin } from '../Transformation';
import { ColumnMixin } from '../Column';

export const ColumnBundle = [
  DatatypeMixin as Mixin,
  DirectionMixin as Mixin,
  TransformationMixin as Mixin,
  ColumnMixin as Mixin];
