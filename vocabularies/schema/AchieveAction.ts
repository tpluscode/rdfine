import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ActionMixin from './Action';

export interface AchieveAction extends Schema.Action, RdfResource {
}

export default function AchieveActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AchieveActionClass extends ActionMixin(Resource) implements AchieveAction {
  }
  return AchieveActionClass
}

class AchieveActionImpl extends AchieveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<AchieveAction>) {
    super(arg)
    this.types.add(schema.AchieveAction)
    initializeProperties<AchieveAction>(this, init)
  }
}
AchieveActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AchieveAction)
AchieveActionMixin.Class = AchieveActionImpl
