import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<AgreeAction>) {
    super(arg)
    this.types.add(schema.AgreeAction)
    initializeProperties<AgreeAction>(this, init)
  }
}
AgreeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AgreeAction)
AgreeActionMixin.Class = AgreeActionImpl
