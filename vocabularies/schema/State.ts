import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<State>) {
    super(arg)
    this.types.add(schema.State)
    initializeProperties<State>(this, init)
  }
}
StateMixin.shouldApply = (r: RdfResource) => r.types.has(schema.State)
StateMixin.Class = StateImpl
