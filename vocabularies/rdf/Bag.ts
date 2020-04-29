import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { rdf } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Rdf from '.';

export interface Bag extends RdfResource {
}

export function BagMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdf)
  class BagClass extends Resource implements Bag {
  }
  return BagClass
}

class BagImpl extends BagMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Bag>) {
    super(arg, init)
    this.types.add(rdf.Bag)
  }
}
BagMixin.shouldApply = (r: RdfResource) => r.types.has(rdf.Bag)
BagMixin.Class = BagImpl
