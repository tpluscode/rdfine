import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rdf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '../index.js';

export interface Bag<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
}

export function BagMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Bag & RdfResourceCore> & Base {
  @rdfine.namespace(rdf)
  class BagClass extends Resource {
  }
  return BagClass as any
}

class BagImpl extends BagMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Bag>) {
    super(arg, init)
    this.types.add(rdf.Bag)
  }

  static readonly __mixins: Mixin[] = [BagMixin];
}
BagMixin.appliesTo = rdf.Bag
BagMixin.Class = BagImpl

export const fromPointer = createFactory<Bag>([BagMixin], { types: [rdf.Bag] });
