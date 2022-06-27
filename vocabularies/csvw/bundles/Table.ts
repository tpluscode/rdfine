import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DatatypeMixin } from '../lib/Datatype';
import { DialectMixin } from '../lib/Dialect';
import { DirectionMixin } from '../lib/Direction';
import { ForeignKeyMixin } from '../lib/ForeignKey';
import { RowMixin } from '../lib/Row';
import { SchemaMixin } from '../lib/Schema';
import { TableMixin } from '../lib/Table';
import { TransformationMixin } from '../lib/Transformation';

export const TableBundle = [
  DatatypeMixin as Mixin,
  DialectMixin as Mixin,
  DirectionMixin as Mixin,
  ForeignKeyMixin as Mixin,
  RowMixin as Mixin,
  SchemaMixin as Mixin,
  TableMixin as Mixin,
  TransformationMixin as Mixin];
