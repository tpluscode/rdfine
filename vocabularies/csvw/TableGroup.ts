import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type * as Csvw from '.';

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
  transformations: Csvw.Transformation;
  valueUrl: string;
}

export default function TableGroupMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class TableGroupClass extends Resource implements TableGroup {
    @property.literal()
    aboutUrl!: string;
    @property.resource()
    datatype!: Csvw.Datatype;
    @property.literal({ path: csvw.datatype })
    datatypeLiteral!: string;
    @property.literal()
    default!: string;
    @property.resource()
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
    @property.resource()
    table!: Csvw.Table;
    @property.resource()
    tableDirection!: Csvw.Direction;
    @property.resource()
    tableSchema!: Csvw.Schema;
    @property.resource()
    textDirection!: Csvw.Direction;
    @property.resource()
    transformations!: Csvw.Transformation;
    @property.literal()
    valueUrl!: string;
  }
  return TableGroupClass
}

class TableGroupImpl extends TableGroupMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(csvw.TableGroup)
  }
}
TableGroupMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.TableGroup)
TableGroupMixin.Class = TableGroupImpl
