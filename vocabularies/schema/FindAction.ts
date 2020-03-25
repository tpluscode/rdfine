import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ActionMixin from './Action';

export interface FindAction extends Schema.Action, RdfResource {
}

export default function FindActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FindActionClass extends ActionMixin(Resource) implements FindAction {
  }
  return FindActionClass
}

class FindActionImpl extends FindActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<FindAction>) {
    super(arg)
    this.types.add(schema.FindAction)
    initializeProperties<FindAction>(this, init)
  }
}
FindActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FindAction)
FindActionMixin.Class = FindActionImpl
