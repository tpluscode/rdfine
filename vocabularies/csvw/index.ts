import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import CellMixin from './Cell';
import ColumnMixin from './Column';
import DatatypeMixin from './Datatype';
import DialectMixin from './Dialect';
import DirectionMixin from './Direction';
import ForeignKeyMixin from './ForeignKey';
import NumericFormatMixin from './NumericFormat';
import RowMixin from './Row';
import SchemaMixin from './Schema';
import TableMixin from './Table';
import TableGroupMixin from './TableGroup';
import TableReferenceMixin from './TableReference';
import TransformationMixin from './Transformation';

export default [
  CellMixin as Mixin,
  ColumnMixin as Mixin,
  DatatypeMixin as Mixin,
  DialectMixin as Mixin,
  DirectionMixin as Mixin,
  ForeignKeyMixin as Mixin,
  NumericFormatMixin as Mixin,
  RowMixin as Mixin,
  SchemaMixin as Mixin,
  TableMixin as Mixin,
  TableGroupMixin as Mixin,
  TableReferenceMixin as Mixin,
  TransformationMixin as Mixin,
];

export { Cell } from './Cell';
export { Column } from './Column';
export { Datatype } from './Datatype';
export { Dialect } from './Dialect';
export { Direction } from './Direction';
export { ForeignKey } from './ForeignKey';
export { NumericFormat } from './NumericFormat';
export { Row } from './Row';
export { Schema } from './Schema';
export { Table } from './Table';
export { TableGroup } from './TableGroup';
export { TableReference } from './TableReference';
export { Transformation } from './Transformation';
