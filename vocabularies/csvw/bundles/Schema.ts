import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ColumnMixin } from '../lib/Column';
import { DatatypeMixin } from '../lib/Datatype';
import { DirectionMixin } from '../lib/Direction';
import { ForeignKeyMixin } from '../lib/ForeignKey';
import { SchemaMixin } from '../lib/Schema';
import { TransformationMixin } from '../lib/Transformation';

export const SchemaBundle = [
  ColumnMixin as Mixin,
  DatatypeMixin as Mixin,
  DirectionMixin as Mixin,
  ForeignKeyMixin as Mixin,
  SchemaMixin as Mixin,
  TransformationMixin as Mixin];
