import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OfferMixin } from './Offer.js';

export interface OfferForPurchase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Offer<D>, rdfine.RdfResource<D> {
}

export function OfferForPurchaseMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<OfferForPurchase> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class OfferForPurchaseClass extends OfferMixin(Resource) implements Partial<OfferForPurchase> {
  }
  return OfferForPurchaseClass
}

class OfferForPurchaseImpl extends OfferForPurchaseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OfferForPurchase>) {
    super(arg, init)
    this.types.add(schema.OfferForPurchase)
  }

  static readonly __mixins: Mixin[] = [OfferForPurchaseMixin, OfferMixin];
}
OfferForPurchaseMixin.appliesTo = schema.OfferForPurchase
OfferForPurchaseMixin.Class = OfferForPurchaseImpl

export const fromPointer = createFactory<OfferForPurchase>([OfferMixin, OfferForPurchaseMixin], { types: [schema.OfferForPurchase] });
