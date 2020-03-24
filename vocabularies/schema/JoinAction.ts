import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import InteractActionMixin from './InteractAction';

export interface JoinAction extends Schema.InteractAction, RdfResource {
  event: Schema.Event;
}

export default function JoinActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class JoinActionClass extends InteractActionMixin(Resource) implements JoinAction {
    @property.resource()
    event!: Schema.Event;
  }
  return JoinActionClass
}

class JoinActionImpl extends JoinActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<JoinAction>) {
    super(arg)
    this.types.add(schema.JoinAction)
    initializeProperties(this, init)
  }
}
JoinActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.JoinAction)
JoinActionMixin.Class = JoinActionImpl
