import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ConsumeActionMixin from './ConsumeAction';

export interface UseAction extends Schema.ConsumeAction, RdfResource {
}

export default function UseActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UseActionClass extends ConsumeActionMixin(Resource) implements UseAction {
  }
  return UseActionClass
}

class UseActionImpl extends UseActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<UseAction>) {
    super(arg)
    this.types.add(schema.UseAction)
    initializeProperties<UseAction>(this, init)
  }
}
UseActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UseAction)
UseActionMixin.Class = UseActionImpl
