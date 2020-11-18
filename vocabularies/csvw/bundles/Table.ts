import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DatatypeMixin } from '../lib/Datatype';
import { DialectMixin } from '../lib/Dialect';
import { ForeignKeyMixin } from '../lib/ForeignKey';
import { RowMixin } from '../lib/Row';
import { DirectionMixin } from '../lib/Direction';
import { SchemaMixin } from '../lib/Schema';
import { TransformationMixin } from '../lib/Transformation';
import { TableMixin } from '../lib/Table';

export const TableBundle = [
  DatatypeMixin as Mixin,
  DialectMixin as Mixin,
  ForeignKeyMixin as Mixin,
  RowMixin as Mixin,
  DirectionMixin as Mixin,
  SchemaMixin as Mixin,
  TransformationMixin as Mixin,
  TableMixin as Mixin];
