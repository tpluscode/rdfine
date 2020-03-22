import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import TradeActionMixin from './TradeAction';

export interface DonateAction extends Schema.TradeAction, RdfResource {
  recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
}

export default function DonateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DonateActionClass extends TradeActionMixin(Resource) implements DonateAction {
    @property.resource()
    recipient!: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
  }
  return DonateActionClass
}

class DonateActionImpl extends DonateActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DonateAction)
  }
}
DonateActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DonateAction)
DonateActionMixin.Class = DonateActionImpl