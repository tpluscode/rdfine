import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import TradeActionMixin from './TradeAction';

export interface PayAction extends Schema.TradeAction, RdfResource {
  recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
}

export default function PayActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PayActionClass extends TradeActionMixin(Resource) implements PayAction {
    @property.resource()
    recipient!: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
  }
  return PayActionClass
}

class PayActionImpl extends PayActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PayAction>) {
    super(arg, init)
    this.types.add(schema.PayAction)
  }
}
PayActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PayAction)
PayActionMixin.Class = PayActionImpl
