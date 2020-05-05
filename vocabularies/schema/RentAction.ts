import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { TradeActionMixin } from './TradeAction';

export interface RentAction extends Schema.TradeAction, RdfResource {
  landlord: Schema.Organization | Schema.Person;
  realEstateAgent: Schema.RealEstateAgent;
}

export function RentActionMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: Initializer<RentAction>) {
    super(arg, init)
    this.types.add(schema.RentAction)
  }

  static readonly __mixins: Mixin[] = [RentActionMixin, TradeActionMixin];
}
RentActionMixin.appliesTo = schema.RentAction
RentActionMixin.Class = RentActionImpl
