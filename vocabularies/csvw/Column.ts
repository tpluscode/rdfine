import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type * as Csvw from '.';

export interface Column extends RdfResource {
  aboutUrl: string;
  datatype: Csvw.Datatype;
  datatypeLiteral: string;
  default: string;
  lang: string;
  name: string;
  null: string;
  ordered: boolean;
  propertyUrl: string;
  required: boolean;
  separator: string;
  suppressOutput: boolean;
  textDirection: Csvw.Direction;
  title: rdf.Term;
  transformations: Csvw.Transformation;
  valueUrl: string;
  virtual: boolean;
}

export default function ColumnMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class ColumnClass extends Resource implements Column {
    @property.literal()
    aboutUrl!: string;
    @property.resource()
    datatype!: Csvw.Datatype;
    @property.literal({ path: csvw.datatype })
    datatypeLiteral!: string;
    @property.literal()
    default!: string;
    @property.literal()
    lang!: string;
    @property.literal()
    name!: string;
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
    @property.literal({ type: Boolean })
    suppressOutput!: boolean;
    @property.resource()
    textDirection!: Csvw.Direction;
    @property()
    title!: rdf.Term;
    @property.resource()
    transformations!: Csvw.Transformation;
    @property.literal()
    valueUrl!: string;
    @property.literal({ type: Boolean })
    virtual!: boolean;
  }
  return ColumnClass
}

class ColumnImpl extends ColumnMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(csvw.Column)
  }
}
ColumnMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.Column)
ColumnMixin.Class = ColumnImpl
