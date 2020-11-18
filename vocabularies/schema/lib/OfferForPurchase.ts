import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OfferMixin } from './Offer';

export interface OfferForPurchase<ID extends ResourceNode = ResourceNode> extends Schema.Offer<ID>, RdfResource<ID> {
}

export function OfferForPurchaseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OfferForPurchaseClass extends OfferMixin(Resource) implements OfferForPurchase {
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
