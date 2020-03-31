import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import AllocateActionMixin from './AllocateAction';

export interface AcceptAction extends Schema.AllocateAction, RdfResource {
}

export default function AcceptActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AcceptActionClass extends AllocateActionMixin(Resource) implements AcceptAction {
  }
  return AcceptActionClass
}

class AcceptActionImpl extends AcceptActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AcceptAction>) {
    super(arg, init)
    this.types.add(schema.AcceptAction)
  }
}
AcceptActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AcceptAction)
AcceptActionMixin.Class = AcceptActionImpl
