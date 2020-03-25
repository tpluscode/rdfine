import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import OrganizationMixin from './Organization';
import PlaceMixin from './Place';

export interface LocalBusiness extends Schema.Organization, Schema.Place, RdfResource {
  branchOf: Schema.Organization;
  currenciesAccepted: string;
  openingHours: string;
  paymentAccepted: string;
  priceRange: string;
}

export default function LocalBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LocalBusinessClass extends PlaceMixin(OrganizationMixin(Resource)) implements LocalBusiness {
    @property.resource()
    branchOf!: Schema.Organization;
    @property.literal()
    currenciesAccepted!: string;
    @property.literal()
    openingHours!: string;
    @property.literal()
    paymentAccepted!: string;
    @property.literal()
    priceRange!: string;
  }
  return LocalBusinessClass
}

class LocalBusinessImpl extends LocalBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<LocalBusiness>) {
    super(arg)
    this.types.add(schema.LocalBusiness)
    initializeProperties<LocalBusiness>(this, init)
  }
}
LocalBusinessMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LocalBusiness)
LocalBusinessMixin.Class = LocalBusinessImpl
