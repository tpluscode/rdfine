import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ColumnMixin } from '../Column';
import { DatatypeMixin } from '../Datatype';
import { ForeignKeyMixin } from '../ForeignKey';
import { DirectionMixin } from '../Direction';
import { TransformationMixin } from '../Transformation';
import { SchemaMixin } from '../Schema';

export const SchemaBundle = [
  ColumnMixin as Mixin,
  DatatypeMixin as Mixin,
  ForeignKeyMixin as Mixin,
  DirectionMixin as Mixin,
  TransformationMixin as Mixin,
  SchemaMixin as Mixin];
