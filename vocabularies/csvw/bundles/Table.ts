import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DatatypeMixin } from '../Datatype';
import { DialectMixin } from '../Dialect';
import { ForeignKeyMixin } from '../ForeignKey';
import { RowMixin } from '../Row';
import { DirectionMixin } from '../Direction';
import { SchemaMixin } from '../Schema';
import { TransformationMixin } from '../Transformation';
import { TableMixin } from '../Table';

export const TableBundle = [
  DatatypeMixin as Mixin,
  DialectMixin as Mixin,
  ForeignKeyMixin as Mixin,
  RowMixin as Mixin,
  DirectionMixin as Mixin,
  SchemaMixin as Mixin,
  TransformationMixin as Mixin,
  TableMixin as Mixin];
