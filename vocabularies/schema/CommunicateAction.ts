import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import InteractActionMixin from './InteractAction';

export interface CommunicateAction extends Schema.InteractAction, RdfResource {
  about: Schema.Thing;
  inLanguage: Schema.Language;
  inLanguageLiteral: string;
  language: Schema.Language;
  recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
}

export default function CommunicateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CommunicateActionClass extends InteractActionMixin(Resource) implements CommunicateAction {
    @property.resource()
    about!: Schema.Thing;
    @property.resource()
    inLanguage!: Schema.Language;
    @property.literal({ path: schema.inLanguage })
    inLanguageLiteral!: string;
    @property.resource()
    language!: Schema.Language;
    @property.resource()
    recipient!: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
  }
  return CommunicateActionClass
}

class CommunicateActionImpl extends CommunicateActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CommunicateAction)
  }
}
CommunicateActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CommunicateAction)
CommunicateActionMixin.Class = CommunicateActionImpl
