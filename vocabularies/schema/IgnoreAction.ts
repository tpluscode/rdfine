import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AssessActionMixin from './AssessAction';

export interface IgnoreAction extends Schema.AssessAction, RdfResource {
}

export default function IgnoreActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class IgnoreActionClass extends AssessActionMixin(Resource) implements IgnoreAction {
  }
  return IgnoreActionClass
}

class IgnoreActionImpl extends IgnoreActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<IgnoreAction>) {
    super(arg)
    this.types.add(schema.IgnoreAction)
    initializeProperties(this, init)
  }
}
IgnoreActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.IgnoreAction)
IgnoreActionMixin.Class = IgnoreActionImpl
