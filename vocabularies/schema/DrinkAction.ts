import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DrinkAction)
  }
}
DrinkActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DrinkAction)
DrinkActionMixin.Class = DrinkActionImpl
