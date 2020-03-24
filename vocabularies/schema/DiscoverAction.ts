import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import FindActionMixin from './FindAction';

export interface DiscoverAction extends Schema.FindAction, RdfResource {
}

export default function DiscoverActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DiscoverActionClass extends FindActionMixin(Resource) implements DiscoverAction {
  }
  return DiscoverActionClass
}

class DiscoverActionImpl extends DiscoverActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<DiscoverAction>) {
    super(arg)
    this.types.add(schema.DiscoverAction)
    initializeProperties(this, init)
  }
}
DiscoverActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DiscoverAction)
DiscoverActionMixin.Class = DiscoverActionImpl
