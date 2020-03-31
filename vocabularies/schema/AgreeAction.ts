import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<AgreeAction>) {
    super(arg, init)
    this.types.add(schema.AgreeAction)
  }
}
AgreeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AgreeAction)
AgreeActionMixin.Class = AgreeActionImpl
