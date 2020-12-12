import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { csvw } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '..';

export interface Schema<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  aboutUrl: string | undefined;
  column: Array<Csvw.Column<D>>;
  datatype: Csvw.Datatype<D> | undefined;
  datatypeLiteral: string | undefined;
  default: string | undefined;
  foreignKey: Csvw.ForeignKey<D> | undefined;
  lang: string | undefined;
  null: string | undefined;
  ordered: boolean | undefined;
  primaryKey: string | undefined;
  propertyUrl: string | undefined;
  required: boolean | undefined;
  rowTitle: string | undefined;
  separator: string | undefined;
  textDirection: Csvw.Direction<D> | undefined;
  transformations: Array<Csvw.Transformation<D>>;
  valueUrl: string | undefined;
}

export function SchemaMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Schema> & RdfResourceCore> & Base {
  @namespace(csvw)
  class SchemaClass extends Resource implements Partial<Schema> {
    @property.literal()
    aboutUrl: string | undefined;
    @property.resource({ values: 'list', implicitTypes: [csvw.Column] })
    column!: Array<Csvw.Column>;
    @property.resource({ implicitTypes: [csvw.Datatype] })
    datatype: Csvw.Datatype | undefined;
    @property.literal({ path: csvw.datatype })
    datatypeLiteral: string | undefined;
    @property.literal()
    default: string | undefined;
    @property.resource({ implicitTypes: [csvw.ForeignKey] })
    foreignKey: Csvw.ForeignKey | undefined;
    @property.literal()
    lang: string | undefined;
    @property.literal()
    null: string | undefined;
    @property.literal({ type: Boolean })
    ordered: boolean | undefined;
    @property.literal()
    primaryKey: string | undefined;
    @property.literal()
    propertyUrl: string | undefined;
    @property.literal({ type: Boolean })
    required: boolean | undefined;
    @property.literal()
    rowTitle: string | undefined;
    @property.literal()
    separator: string | undefined;
    @property.resource({ implicitTypes: [csvw.Direction] })
    textDirection: Csvw.Direction | undefined;
    @property.resource({ values: 'array', implicitTypes: [csvw.Transformation] })
    transformations!: Array<Csvw.Transformation>;
    @property.literal()
    valueUrl: string | undefined;
  }
  return SchemaClass
}

class SchemaImpl extends SchemaMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Schema>) {
    super(arg, init)
    this.types.add(csvw.Schema)
  }

  static readonly __mixins: Mixin[] = [SchemaMixin];
}
SchemaMixin.appliesTo = csvw.Schema
SchemaMixin.Class = SchemaImpl

export const fromPointer = createFactory<Schema>([SchemaMixin], { types: [csvw.Schema] });
