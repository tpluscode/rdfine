import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface TravelAgency extends Schema.LocalBusiness, RdfResource {
}

export function TravelAgencyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TravelAgencyClass extends LocalBusinessMixin(Resource) implements TravelAgency {
  }
  return TravelAgencyClass
}

class TravelAgencyImpl extends TravelAgencyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TravelAgency>) {
    super(arg, init)
    this.types.add(schema.TravelAgency)
  }

  static readonly __mixins: Mixin[] = [TravelAgencyMixin, LocalBusinessMixin];
}
TravelAgencyMixin.appliesTo = schema.TravelAgency
TravelAgencyMixin.Class = TravelAgencyImpl
