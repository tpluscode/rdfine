import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import OrganizationMixin from './Organization';

export interface Airline extends Schema.Organization, RdfResource {
  boardingPolicy: Schema.BoardingPolicyType;
  iataCode: string;
}

export default function AirlineMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Airline)
  }
}
AirlineMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Airline)
AirlineMixin.Class = AirlineImpl
