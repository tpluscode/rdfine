import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { csvw } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '..';

export interface Column<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  aboutUrl: string | undefined;
  datatype: Csvw.Datatype<D> | undefined;
  datatypeLiteral: string | undefined;
  default: string | undefined;
  lang: string | undefined;
  name: string | undefined;
  null: string | undefined;
  ordered: boolean | undefined;
  propertyUrl: string | undefined;
  required: boolean | undefined;
  separator: string | undefined;
  suppressOutput: boolean | undefined;
  textDirection: Csvw.Direction<D> | undefined;
  title: RDF.Term | undefined;
  transformations: Array<Csvw.Transformation<D>>;
  valueUrl: string | undefined;
  virtual: boolean | undefined;
}

export function ColumnMixin<Base extends Constructor>(Resource: Base): Constructor<Column> & Base {
  @namespace(csvw)
  class ColumnClass extends Resource implements Column {
    @property.literal()
    aboutUrl: string | undefined;
    @property.resource({ implicitTypes: [csvw.Datatype] })
    datatype: Csvw.Datatype | undefined;
    @property.literal({ path: csvw.datatype })
    datatypeLiteral: string | undefined;
    @property.literal()
    default: string | undefined;
    @property.literal()
    lang: string | undefined;
    @property.literal()
    name: string | undefined;
    @property.literal()
    null: string | undefined;
    @property.literal({ type: Boolean })
    ordered: boolean | undefined;
    @property.literal()
    propertyUrl: string | undefined;
    @property.literal({ type: Boolean })
    required: boolean | undefined;
    @property.literal()
    separator: string | undefined;
    @property.literal({ type: Boolean })
    suppressOutput: boolean | undefined;
    @property.resource({ implicitTypes: [csvw.Direction] })
    textDirection: Csvw.Direction | undefined;
    @property()
    title: RDF.Term | undefined;
    @property.resource({ values: 'array', implicitTypes: [csvw.Transformation] })
    transformations!: Array<Csvw.Transformation>;
    @property.literal()
    valueUrl: string | undefined;
    @property.literal({ type: Boolean })
    virtual: boolean | undefined;
  }
  return ColumnClass
}

class ColumnImpl extends ColumnMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Column>) {
    super(arg, init)
    this.types.add(csvw.Column)
  }

  static readonly __mixins: Mixin[] = [ColumnMixin];
}
ColumnMixin.appliesTo = csvw.Column
ColumnMixin.Class = ColumnImpl
