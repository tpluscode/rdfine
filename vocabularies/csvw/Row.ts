import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { csvw } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '.';

export interface Row extends RdfResource {
  describes: RDF.Term;
  primaryKey: string;
  referencedRow: RDF.Term;
  title: RDF.Term;
}

export function RowMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class RowClass extends Resource implements Row {
    @property()
    describes!: RDF.Term;
    @property.literal()
    primaryKey!: string;
    @property()
    referencedRow!: RDF.Term;
    @property()
    title!: RDF.Term;
  }
  return RowClass
}

class RowImpl extends RowMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Row>) {
    super(arg, init)
    this.types.add(csvw.Row)
  }

  static readonly __mixins: Mixin[] = [RowMixin];
}
RowMixin.appliesTo = csvw.Row
RowMixin.Class = RowImpl
