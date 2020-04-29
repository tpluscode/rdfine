import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { csvw } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Csvw from '.';

export interface TableGroup extends RdfResource {
  aboutUrl: string;
  datatype: Csvw.Datatype;
  datatypeLiteral: string;
  default: string;
  dialect: Csvw.Dialect;
  lang: string;
  note: RDF.Term;
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

export function TableGroupMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class TableGroupClass extends Resource implements TableGroup {
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
    @property.literal()
    separator!: string;
    @property.resource({ implicitTypes: [csvw.Table] })
    table!: Csvw.Table;
    @property.resource({ implicitTypes: [csvw.Direction] })
    tableDirection!: Csvw.Direction;
    @property.resource({ implicitTypes: [csvw.Schema] })
    tableSchema!: Csvw.Schema;
    @property.resource({ implicitTypes: [csvw.Direction] })
    textDirection!: Csvw.Direction;
    @property.resource({ values: 'array', implicitTypes: [csvw.Transformation] })
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
