import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Csvw from '.';

export interface Schema extends RdfResource {
  aboutUrl: string;
  column: Csvw.Column;
  datatype: Csvw.Datatype;
  datatypeLiteral: string;
  default: string;
  foreignKey: Csvw.ForeignKey;
  lang: string;
  null: string;
  ordered: boolean;
  primaryKey: string;
  propertyUrl: string;
  required: boolean;
  rowTitle: string;
  separator: string;
  textDirection: Csvw.Direction;
  transformations: Csvw.Transformation;
  valueUrl: string;
}

export default function SchemaMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class SchemaClass extends Resource implements Schema {
    @property.literal()
    aboutUrl!: string;
    @property.resource()
    column!: Csvw.Column;
    @property.resource()
    datatype!: Csvw.Datatype;
    @property.literal({ path: csvw.datatype })
    datatypeLiteral!: string;
    @property.literal()
    default!: string;
    @property.resource()
    foreignKey!: Csvw.ForeignKey;
    @property.literal()
    lang!: string;
    @property.literal()
    null!: string;
    @property.literal({ type: Boolean })
    ordered!: boolean;
    @property.literal()
    primaryKey!: string;
    @property.literal()
    propertyUrl!: string;
    @property.literal({ type: Boolean })
    required!: boolean;
    @property.literal()
    rowTitle!: string;
    @property.literal()
    separator!: string;
    @property.resource()
    textDirection!: Csvw.Direction;
    @property.resource()
    transformations!: Csvw.Transformation;
    @property.literal()
    valueUrl!: string;
  }
  return SchemaClass
}

class SchemaImpl extends SchemaMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Schema>) {
    super(arg, init)
    this.types.add(csvw.Schema)
  }
}
SchemaMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.Schema)
SchemaMixin.Class = SchemaImpl
