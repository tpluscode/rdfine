import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ColumnMixin } from '../lib/Column';
import { DatatypeMixin } from '../lib/Datatype';
import { ForeignKeyMixin } from '../lib/ForeignKey';
import { DirectionMixin } from '../lib/Direction';
import { TransformationMixin } from '../lib/Transformation';
import { SchemaMixin } from '../lib/Schema';

export const SchemaBundle = [
  ColumnMixin as Mixin,
  DatatypeMixin as Mixin,
  ForeignKeyMixin as Mixin,
  DirectionMixin as Mixin,
  TransformationMixin as Mixin,
  SchemaMixin as Mixin];
