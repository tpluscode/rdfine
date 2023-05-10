import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Offer<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

export function OfferMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Offer> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class OfferClass extends ActivityMixin(Resource) implements Partial<Offer> {
  }
  return OfferClass
}

class OfferImpl extends OfferMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Offer>) {
    super(arg, init)
    this.types.add(as.Offer)
  }

  static readonly __mixins: Mixin[] = [OfferMixin, ActivityMixin];
}
OfferMixin.appliesTo = as.Offer
OfferMixin.Class = OfferImpl

export const fromPointer = createFactory<Offer>([ActivityMixin, OfferMixin], { types: [as.Offer] });
