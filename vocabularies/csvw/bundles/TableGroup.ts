import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DatatypeMixin } from '../lib/Datatype';
import { DialectMixin } from '../lib/Dialect';
import { TableMixin } from '../lib/Table';
import { DirectionMixin } from '../lib/Direction';
import { SchemaMixin } from '../lib/Schema';
import { TransformationMixin } from '../lib/Transformation';
import { TableGroupMixin } from '../lib/TableGroup';

export const TableGroupBundle = [
  DatatypeMixin as Mixin,
  DialectMixin as Mixin,
  TableMixin as Mixin,
  DirectionMixin as Mixin,
  SchemaMixin as Mixin,
  TransformationMixin as Mixin,
  TableGroupMixin as Mixin];
