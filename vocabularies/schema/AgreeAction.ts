import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ReactActionMixin from './ReactAction';

export interface AgreeAction extends Schema.ReactAction, RdfResource {
}

export default function AgreeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AgreeActionClass extends ReactActionMixin(Resource) implements AgreeAction {
  }
  return AgreeActionClass
}

class AgreeActionImpl extends AgreeActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.AgreeAction)
  }
}
AgreeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AgreeAction)
AgreeActionMixin.Class = AgreeActionImpl
