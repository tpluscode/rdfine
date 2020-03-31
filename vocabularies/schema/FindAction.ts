import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<FindAction>) {
    super(arg, init)
    this.types.add(schema.FindAction)
  }
}
FindActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FindAction)
FindActionMixin.Class = FindActionImpl
