import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OfferMixin } from './Offer';

export interface OfferForPurchase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Offer<D>, RdfResource<D> {
}

export function OfferForPurchaseMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OfferForPurchase> & RdfResourceCore> & Base {
  @namespace(schema)
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
