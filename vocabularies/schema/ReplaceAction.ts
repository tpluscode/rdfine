import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import UpdateActionMixin from './UpdateAction';

export interface ReplaceAction extends Schema.UpdateAction, RdfResource {
  replacee: Schema.Thing;
  replacer: Schema.Thing;
}

export default function ReplaceActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReplaceActionClass extends UpdateActionMixin(Resource) implements ReplaceAction {
    @property.resource()
    replacee!: Schema.Thing;
    @property.resource()
    replacer!: Schema.Thing;
  }
  return ReplaceActionClass
}

class ReplaceActionImpl extends ReplaceActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ReplaceAction>) {
    super(arg)
    this.types.add(schema.ReplaceAction)
    initializeProperties<ReplaceAction>(this, init)
  }
}
ReplaceActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ReplaceAction)
ReplaceActionMixin.Class = ReplaceActionImpl
