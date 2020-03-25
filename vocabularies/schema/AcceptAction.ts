import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AllocateActionMixin from './AllocateAction';

export interface AcceptAction extends Schema.AllocateAction, RdfResource {
}

export default function AcceptActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AcceptActionClass extends AllocateActionMixin(Resource) implements AcceptAction {
  }
  return AcceptActionClass
}

class AcceptActionImpl extends AcceptActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<AcceptAction>) {
    super(arg)
    this.types.add(schema.AcceptAction)
    initializeProperties<AcceptAction>(this, init)
  }
}
AcceptActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AcceptAction)
AcceptActionMixin.Class = AcceptActionImpl
