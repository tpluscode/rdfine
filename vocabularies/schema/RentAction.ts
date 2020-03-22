import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import TradeActionMixin from './TradeAction';

export interface RentAction extends Schema.TradeAction, RdfResource {
  landlord: Schema.Organization | Schema.Person;
  realEstateAgent: Schema.RealEstateAgent;
}

export default function RentActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RentActionClass extends TradeActionMixin(Resource) implements RentAction {
    @property.resource()
    landlord!: Schema.Organization | Schema.Person;
    @property.resource()
    realEstateAgent!: Schema.RealEstateAgent;
  }
  return RentActionClass
}

class RentActionImpl extends RentActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.RentAction)
  }
}
RentActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RentAction)
RentActionMixin.Class = RentActionImpl
