import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AdministrativeAreaMixin from './AdministrativeArea';

export interface State extends Schema.AdministrativeArea, RdfResource {
}

export default function StateMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class StateClass extends AdministrativeAreaMixin(Resource) implements State {
  }
  return StateClass
}

class StateImpl extends StateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<State>) {
    super(arg, init)
    this.types.add(schema.State)
  }
}
StateMixin.shouldApply = (r: RdfResource) => r.types.has(schema.State)
StateMixin.Class = StateImpl
