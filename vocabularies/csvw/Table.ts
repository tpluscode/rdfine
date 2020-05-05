import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { csvw } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '.';

export interface Table extends RdfResource {
  aboutUrl: string;
  datatype: Csvw.Datatype;
  datatypeLiteral: string;
  default: string;
  dialect: Csvw.Dialect;
  foreignKey: Csvw.ForeignKey;
  lang: string;
  note: RDF.Term;
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
  transformations: Array<Csvw.Transformation>;
  url: string;
  valueUrl: string;
}

export function TableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class TableClass extends Resource implements Table {
    @property.literal()
    aboutUrl!: string;
    @property.resource({ implicitTypes: [csvw.Datatype] })
    datatype!: Csvw.Datatype;
    @property.literal({ path: csvw.datatype })
    datatypeLiteral!: string;
    @property.literal()
    default!: string;
    @property.resource({ implicitTypes: [csvw.Dialect] })
    dialect!: Csvw.Dialect;
    @property.resource({ implicitTypes: [csvw.ForeignKey] })
    foreignKey!: Csvw.ForeignKey;
    @property.literal()
    lang!: string;
    @property()
    note!: RDF.Term;
    @property.literal()
    null!: string;
    @property.literal({ type: Boolean })
    ordered!: boolean;
    @property.literal()
    propertyUrl!: string;
    @property.literal({ type: Boolean })
    required!: boolean;
    @property.resource({ implicitTypes: [csvw.Row] })
    row!: Csvw.Row;
    @property.literal()
    separator!: string;
    @property.literal({ type: Boolean })
    suppressOutput!: boolean;
    @property.resource({ implicitTypes: [csvw.Direction] })
    tableDirection!: Csvw.Direction;
    @property.resource({ implicitTypes: [csvw.Schema] })
    tableSchema!: Csvw.Schema;
    @property.resource({ implicitTypes: [csvw.Direction] })
    textDirection!: Csvw.Direction;
    @property.resource({ values: 'array', implicitTypes: [csvw.Transformation] })
    transformations!: Array<Csvw.Transformation>;
    @property.literal()
    url!: string;
    @property.literal()
    valueUrl!: string;
  }
  return TableClass
}

class TableImpl extends TableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Table>) {
    super(arg, init)
    this.types.add(csvw.Table)
  }

  static readonly __mixins: Mixin[] = [TableMixin];
}
TableMixin.appliesTo = csvw.Table
TableMixin.Class = TableImpl
