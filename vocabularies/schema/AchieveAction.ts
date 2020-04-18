import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<AchieveAction>) {
    super(arg, init)
    this.types.add(schema.AchieveAction)
  }
}
AchieveActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AchieveAction)
AchieveActionMixin.Class = AchieveActionImpl
