import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { csvw } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '.';

export interface Table extends RdfResource {
  aboutUrl: string | undefined;
  datatype: Csvw.Datatype | undefined;
  datatypeLiteral: string | undefined;
  default: string | undefined;
  dialect: Csvw.Dialect | undefined;
  foreignKey: Csvw.ForeignKey | undefined;
  lang: string | undefined;
  note: RDF.Term | undefined;
  null: string | undefined;
  ordered: boolean | undefined;
  propertyUrl: string | undefined;
  required: boolean | undefined;
  row: Csvw.Row | undefined;
  separator: string | undefined;
  suppressOutput: boolean | undefined;
  tableDirection: Csvw.Direction | undefined;
  tableSchema: Csvw.Schema | undefined;
  textDirection: Csvw.Direction | undefined;
  transformations: Array<Csvw.Transformation>;
  url: string | undefined;
  valueUrl: string | undefined;
}

export function TableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class TableClass extends Resource implements Table {
    @property.literal()
    aboutUrl: string | undefined;
    @property.resource({ implicitTypes: [csvw.Datatype] })
    datatype: Csvw.Datatype | undefined;
    @property.literal({ path: csvw.datatype })
    datatypeLiteral: string | undefined;
    @property.literal()
    default: string | undefined;
    @property.resource({ implicitTypes: [csvw.Dialect] })
    dialect: Csvw.Dialect | undefined;
    @property.resource({ implicitTypes: [csvw.ForeignKey] })
    foreignKey: Csvw.ForeignKey | undefined;
    @property.literal()
    lang: string | undefined;
    @property()
    note: RDF.Term | undefined;
    @property.literal()
    null: string | undefined;
    @property.literal({ type: Boolean })
    ordered: boolean | undefined;
    @property.literal()
    propertyUrl: string | undefined;
    @property.literal({ type: Boolean })
    required: boolean | undefined;
    @property.resource({ implicitTypes: [csvw.Row] })
    row: Csvw.Row | undefined;
    @property.literal()
    separator: string | undefined;
    @property.literal({ type: Boolean })
    suppressOutput: boolean | undefined;
    @property.resource({ implicitTypes: [csvw.Direction] })
    tableDirection: Csvw.Direction | undefined;
    @property.resource({ implicitTypes: [csvw.Schema] })
    tableSchema: Csvw.Schema | undefined;
    @property.resource({ implicitTypes: [csvw.Direction] })
    textDirection: Csvw.Direction | undefined;
    @property.resource({ values: 'array', implicitTypes: [csvw.Transformation] })
    transformations!: Array<Csvw.Transformation>;
    @property.literal()
    url: string | undefined;
    @property.literal()
    valueUrl: string | undefined;
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
