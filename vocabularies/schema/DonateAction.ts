import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<DonateAction>) {
    super(arg)
    this.types.add(schema.DonateAction)
    initializeProperties<DonateAction>(this, init)
  }
}
DonateActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DonateAction)
DonateActionMixin.Class = DonateActionImpl
