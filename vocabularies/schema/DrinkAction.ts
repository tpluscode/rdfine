import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ConsumeActionMixin from './ConsumeAction';

export interface DrinkAction extends Schema.ConsumeAction, RdfResource {
}

export default function DrinkActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DrinkActionClass extends ConsumeActionMixin(Resource) implements DrinkAction {
  }
  return DrinkActionClass
}

class DrinkActionImpl extends DrinkActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<DrinkAction>) {
    super(arg)
    this.types.add(schema.DrinkAction)
    initializeProperties(this, init)
  }
}
DrinkActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DrinkAction)
DrinkActionMixin.Class = DrinkActionImpl
