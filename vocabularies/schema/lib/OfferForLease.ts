import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OfferMixin } from './Offer.js';

export interface OfferForLease<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Offer<D>, RdfResource<D> {
}

export function OfferForLeaseMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OfferForLease> & RdfResourceCore> & Base {
  @namespace(schema)
  class OfferForLeaseClass extends OfferMixin(Resource) implements Partial<OfferForLease> {
  }
  return OfferForLeaseClass
}

class OfferForLeaseImpl extends OfferForLeaseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OfferForLease>) {
    super(arg, init)
    this.types.add(schema.OfferForLease)
  }

  static readonly __mixins: Mixin[] = [OfferForLeaseMixin, OfferMixin];
}
OfferForLeaseMixin.appliesTo = schema.OfferForLease
OfferForLeaseMixin.Class = OfferForLeaseImpl

export const fromPointer = createFactory<OfferForLease>([OfferMixin, OfferForLeaseMixin], { types: [schema.OfferForLease] });
