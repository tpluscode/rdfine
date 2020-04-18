import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Csvw from '.';
import DatatypeMixin from './Datatype';
import DialectMixin from './Dialect';
import ForeignKeyMixin from './ForeignKey';
import RowMixin from './Row';
import DirectionMixin from './Direction';
import SchemaMixin from './Schema';
import TransformationMixin from './Transformation';

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
  transformations: Array<Csvw.Transformation>;
  url: string;
  valueUrl: string;
}

export default function TableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class TableClass extends Resource implements Table {
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
    @property.resource({ as: [ForeignKeyMixin] })
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
    @property.resource({ as: [RowMixin] })
    row!: Csvw.Row;
    @property.literal()
    separator!: string;
    @property.literal({ type: Boolean })
    suppressOutput!: boolean;
    @property.resource({ as: [DirectionMixin] })
    tableDirection!: Csvw.Direction;
    @property.resource({ as: [SchemaMixin] })
    tableSchema!: Csvw.Schema;
    @property.resource({ as: [DirectionMixin] })
    textDirection!: Csvw.Direction;
    @property.resource({ values: 'array', as: [TransformationMixin] })
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
}
TableMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.Table)
TableMixin.Class = TableImpl
