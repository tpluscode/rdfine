import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ActivityMixin } from './Activity';

export interface Offer<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function OfferMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Offer> & RdfResourceCore> & Base {
  @namespace(as)
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
