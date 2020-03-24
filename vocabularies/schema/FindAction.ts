import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.FindAction)
  }
}
FindActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FindAction)
FindActionMixin.Class = FindActionImpl
