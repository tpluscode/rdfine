import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import InformActionMixin from './InformAction';

export interface ConfirmAction extends Schema.InformAction, RdfResource {
}

export default function ConfirmActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ConfirmActionClass extends InformActionMixin(Resource) implements ConfirmAction {
  }
  return ConfirmActionClass
}

class ConfirmActionImpl extends ConfirmActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ConfirmAction>) {
    super(arg, init)
    this.types.add(schema.ConfirmAction)
  }
}
ConfirmActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ConfirmAction)
ConfirmActionMixin.Class = ConfirmActionImpl
