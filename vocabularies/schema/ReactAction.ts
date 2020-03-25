import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AssessActionMixin from './AssessAction';

export interface ReactAction extends Schema.AssessAction, RdfResource {
}

export default function ReactActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReactActionClass extends AssessActionMixin(Resource) implements ReactAction {
  }
  return ReactActionClass
}

class ReactActionImpl extends ReactActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReactAction>) {
    super(arg, init)
    this.types.add(schema.ReactAction)
  }
}
ReactActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ReactAction)
ReactActionMixin.Class = ReactActionImpl
