import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import InteractActionMixin from './InteractAction';

export interface MarryAction extends Schema.InteractAction, RdfResource {
}

export default function MarryActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MarryActionClass extends InteractActionMixin(Resource) implements MarryAction {
  }
  return MarryActionClass
}

class MarryActionImpl extends MarryActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<MarryAction>) {
    super(arg)
    this.types.add(schema.MarryAction)
    initializeProperties(this, init)
  }
}
MarryActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MarryAction)
MarryActionMixin.Class = MarryActionImpl
