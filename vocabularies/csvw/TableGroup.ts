import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Csvw from '.';
import DatatypeMixin from './Datatype';
import DialectMixin from './Dialect';
import TableMixin from './Table';
import DirectionMixin from './Direction';
import SchemaMixin from './Schema';
import TransformationMixin from './Transformation';

export interface TableGroup extends RdfResource {
  aboutUrl: string;
  datatype: Csvw.Datatype;
  datatypeLiteral: string;
  default: string;
  dialect: Csvw.Dialect;
  lang: string;
  note: rdf.Term;
  null: string;
  ordered: boolean;
  propertyUrl: string;
  required: boolean;
  separator: string;
  table: Csvw.Table;
  tableDirection: Csvw.Direction;
  tableSchema: Csvw.Schema;
  textDirection: Csvw.Direction;
  transformations: Array<Csvw.Transformation>;
  valueUrl: string;
}

export default function TableGroupMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class TableGroupClass extends Resource implements TableGroup {
    @property.literal()
    aboutUrl!: string;
    @property.resource({ as: [DatatypeMixin] })
    datatype!: Csvw.Datatype;
    @property.literal({ path: csvw.datatype })
    datatypeLiteral!: string;
    @property.literal()
    default!: string;
    @property.resource({ as: [DialectMixin] })
    dialect!: Csvw.Dialect;
    @property.literal()
    lang!: string;
    @property()
    note!: rdf.Term;
    @property.literal()
    null!: string;
    @property.literal({ type: Boolean })
    ordered!: boolean;
    @property.literal()
    propertyUrl!: string;
    @property.literal({ type: Boolean })
    required!: boolean;
    @property.literal()
    separator!: string;
    @property.resource({ as: [TableMixin] })
    table!: Csvw.Table;
    @property.resource({ as: [DirectionMixin] })
    tableDirection!: Csvw.Direction;
    @property.resource({ as: [SchemaMixin] })
    tableSchema!: Csvw.Schema;
    @property.resource({ as: [DirectionMixin] })
    textDirection!: Csvw.Direction;
    @property.resource({ values: 'array', as: [TransformationMixin] })
    transformations!: Array<Csvw.Transformation>;
    @property.literal()
    valueUrl!: string;
  }
  return TableGroupClass
}

class TableGroupImpl extends TableGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TableGroup>) {
    super(arg, init)
    this.types.add(csvw.TableGroup)
  }
}
TableGroupMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.TableGroup)
TableGroupMixin.Class = TableGroupImpl
