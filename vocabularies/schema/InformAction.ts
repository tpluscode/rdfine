import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { CommunicateActionMixin } from './CommunicateAction';

export interface InformAction extends Schema.CommunicateAction, RdfResource {
  event: Schema.Event;
}

export function InformActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InformActionClass extends CommunicateActionMixin(Resource) implements InformAction {
    @property.resource()
    event!: Schema.Event;
  }
  return InformActionClass
}

class InformActionImpl extends InformActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InformAction>) {
    super(arg, init)
    this.types.add(schema.InformAction)
  }
}
InformActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InformAction)
InformActionMixin.Class = InformActionImpl
