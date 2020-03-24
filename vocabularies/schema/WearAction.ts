import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import UseActionMixin from './UseAction';

export interface WearAction extends Schema.UseAction, RdfResource {
}

export default function WearActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WearActionClass extends UseActionMixin(Resource) implements WearAction {
  }
  return WearActionClass
}

class WearActionImpl extends WearActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<WearAction>) {
    super(arg)
    this.types.add(schema.WearAction)
    initializeProperties(this, init)
  }
}
WearActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WearAction)
WearActionMixin.Class = WearActionImpl
