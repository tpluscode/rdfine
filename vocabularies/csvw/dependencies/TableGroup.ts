import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DatatypeMixin } from '../Datatype';
import { DialectMixin } from '../Dialect';
import { TableMixin } from '../Table';
import { DirectionMixin } from '../Direction';
import { SchemaMixin } from '../Schema';
import { TransformationMixin } from '../Transformation';
import { TableGroupMixin } from '../TableGroup';

export const TableGroupDependencies = [
  DatatypeMixin as Mixin,
  DialectMixin as Mixin,
  TableMixin as Mixin,
  DirectionMixin as Mixin,
  SchemaMixin as Mixin,
  TransformationMixin as Mixin,
  TableGroupMixin as Mixin];
