import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.EndorseAction)
  }
}
EndorseActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EndorseAction)
EndorseActionMixin.Class = EndorseActionImpl
