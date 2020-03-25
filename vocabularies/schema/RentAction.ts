import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<RentAction>) {
    super(arg)
    this.types.add(schema.RentAction)
    initializeProperties<RentAction>(this, init)
  }
}
RentActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RentAction)
RentActionMixin.Class = RentActionImpl
