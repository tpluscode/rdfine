import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DatatypeMixin } from '../lib/Datatype';
import { DialectMixin } from '../lib/Dialect';
import { DirectionMixin } from '../lib/Direction';
import { SchemaMixin } from '../lib/Schema';
import { TableGroupMixin } from '../lib/TableGroup';
import { TableMixin } from '../lib/Table';
import { TransformationMixin } from '../lib/Transformation';

export const TableGroupBundle = [
  DatatypeMixin as Mixin,
  DialectMixin as Mixin,
  DirectionMixin as Mixin,
  SchemaMixin as Mixin,
  TableGroupMixin as Mixin,
  TableMixin as Mixin,
  TransformationMixin as Mixin];
