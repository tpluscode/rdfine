import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { csvw } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Row>) {
    super(arg, init)
    this.types.add(csvw.Row)
  }
}
RowMixin.shouldApply = (r: RdfResource) => r.types.has(csvw.Row)
RowMixin.Class = RowImpl
