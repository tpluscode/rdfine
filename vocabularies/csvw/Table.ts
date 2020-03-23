import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type * as Csvw from '.';

export interface Table extends RdfResource {
  aboutUrl: string;
  datatype: Csvw.Datatype;
  datatypeLiteral: string;
  default: string;
  dialect: Csvw.Dialect;
  foreignKey: Csvw.ForeignKey;
  lang: string;
  note: rdf.Term;
  null: string;
  ordered: boolean;
  propertyUrl: string;
  required: boolean;
  row: Csvw.Row;
  separator: string;
  suppressOutput: boolean;
  tableDirection: Csvw.Direction;
  tableSchema: Csvw.Schema;
  textDirection: Csvw.Direction;
  transformations: Csvw.Transformation;
  url: string;
  valueUrl: string;
}

export default function TableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class TableClass extends Resource implements Table {
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
    @property.resource()
    foreignKey!: Csvw.ForeignKey;
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
    @property.resource()
    row!: Csvw.Row;
    @property.literal()
    separator!: string;
    @property.literal({ type: Boolean })
    suppressOutput!: boolean;
    @property.resource()
    tableDirection!: Csvw.Direction;
    @property.resource()
    tableSchema!: Csvw.Schema;
    @property.resource()
    textDirection!: Csvw.Direction;
    @property.resource()
    transformations!: Csvw.Transformation;
    @property.literal()
    url!: string;
    @property.literal()
    valueUrl!: string;
  }
  return TableClass
}

class TableImpl extends TableMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(csvw.Table)
  }
}
TableMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.Table)
TableMixin.Class = TableImpl
