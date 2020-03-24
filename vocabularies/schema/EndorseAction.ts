import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ReactActionMixin from './ReactAction';

export interface EndorseAction extends Schema.ReactAction, RdfResource {
  endorsee: Schema.Organization | Schema.Person;
}

export default function EndorseActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EndorseActionClass extends ReactActionMixin(Resource) implements EndorseAction {
    @property.resource()
    endorsee!: Schema.Organization | Schema.Person;
  }
  return EndorseActionClass
}

class EndorseActionImpl extends EndorseActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<EndorseAction>) {
    super(arg)
    this.types.add(schema.EndorseAction)
    initializeProperties(this, init)
  }
}
EndorseActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EndorseAction)
EndorseActionMixin.Class = EndorseActionImpl
