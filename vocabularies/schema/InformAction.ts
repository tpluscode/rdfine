import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CommunicateActionMixin from './CommunicateAction';

export interface InformAction extends Schema.CommunicateAction, RdfResource {
  event: Schema.Event;
}

export default function InformActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InformActionClass extends CommunicateActionMixin(Resource) implements InformAction {
    @property.resource()
    event!: Schema.Event;
  }
  return InformActionClass
}

class InformActionImpl extends InformActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<InformAction>) {
    super(arg)
    this.types.add(schema.InformAction)
    initializeProperties(this, init)
  }
}
InformActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InformAction)
InformActionMixin.Class = InformActionImpl
