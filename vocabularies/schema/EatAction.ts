import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ConsumeActionMixin from './ConsumeAction';

export interface EatAction extends Schema.ConsumeAction, RdfResource {
}

export default function EatActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EatActionClass extends ConsumeActionMixin(Resource) implements EatAction {
  }
  return EatActionClass
}

class EatActionImpl extends EatActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.EatAction)
  }
}
EatActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EatAction)
EatActionMixin.Class = EatActionImpl
