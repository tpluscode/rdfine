import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { OrganizationMixin } from './Organization';

export interface Airline extends Schema.Organization, RdfResource {
  boardingPolicy: Schema.BoardingPolicyType;
  iataCode: string;
}

export function AirlineMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AirlineClass extends OrganizationMixin(Resource) implements Airline {
    @property()
    boardingPolicy!: Schema.BoardingPolicyType;
    @property.literal()
    iataCode!: string;
  }
  return AirlineClass
}

class AirlineImpl extends AirlineMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Airline>) {
    super(arg, init)
    this.types.add(schema.Airline)
  }

  static readonly __mixins: Mixin[] = [AirlineMixin, OrganizationMixin];
}
AirlineMixin.appliesTo = schema.Airline
AirlineMixin.Class = AirlineImpl
