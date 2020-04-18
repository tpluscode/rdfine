import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<EndorseAction>) {
    super(arg, init)
    this.types.add(schema.EndorseAction)
  }
}
EndorseActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EndorseAction)
EndorseActionMixin.Class = EndorseActionImpl
