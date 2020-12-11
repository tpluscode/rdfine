import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OfferMixin } from './Offer';

export interface OfferForLease<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Offer<D>, RdfResource<D> {
}

export function OfferForLeaseMixin<Base extends Constructor>(Resource: Base): Constructor<OfferForLease> & Base {
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
