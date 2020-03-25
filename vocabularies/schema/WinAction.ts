import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AchieveActionMixin from './AchieveAction';

export interface WinAction extends Schema.AchieveAction, RdfResource {
  loser: Schema.Person;
}

export default function WinActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WinActionClass extends AchieveActionMixin(Resource) implements WinAction {
    @property.resource()
    loser!: Schema.Person;
  }
  return WinActionClass
}

class WinActionImpl extends WinActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<WinAction>) {
    super(arg)
    this.types.add(schema.WinAction)
    initializeProperties<WinAction>(this, init)
  }
}
WinActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WinAction)
WinActionMixin.Class = WinActionImpl
