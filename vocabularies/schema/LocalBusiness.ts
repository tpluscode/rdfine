import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<LocalBusiness>) {
    super(arg, init)
    this.types.add(schema.LocalBusiness)
  }
}
LocalBusinessMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LocalBusiness)
LocalBusinessMixin.Class = LocalBusinessImpl
