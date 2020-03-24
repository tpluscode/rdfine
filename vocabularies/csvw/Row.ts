import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Csvw from '.';

export interface Row extends RdfResource {
  describes: rdf.Term;
  primaryKey: string;
  referencedRow: rdf.Term;
  title: rdf.Term;
}

export default function RowMixin<Base extends Constructor>(Resource: Base) {
  @namespace(csvw)
  class RowClass extends Resource implements Row {
    @property()
    describes!: rdf.Term;
    @property.literal()
    primaryKey!: string;
    @property()
    referencedRow!: rdf.Term;
    @property()
    title!: rdf.Term;
  }
  return RowClass
}

class RowImpl extends RowMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Row>) {
    super(arg)
    this.types.add(csvw.Row)
    initializeProperties(this, init)
  }
}
RowMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.Row)
RowMixin.Class = RowImpl
