import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OfferMixin } from './Offer';

export interface OfferForLease<ID extends ResourceNode = ResourceNode> extends Schema.Offer<ID>, RdfResource<ID> {
}

export function OfferForLeaseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OfferForLeaseClass extends OfferMixin(Resource) implements OfferForLease {
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
