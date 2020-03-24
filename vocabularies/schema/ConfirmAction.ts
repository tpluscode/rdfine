import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<ConfirmAction>) {
    super(arg)
    this.types.add(schema.ConfirmAction)
    initializeProperties(this, init)
  }
}
ConfirmActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ConfirmAction)
ConfirmActionMixin.Class = ConfirmActionImpl
