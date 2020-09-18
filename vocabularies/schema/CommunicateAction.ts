import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { InteractActionMixin } from './InteractAction';

export interface CommunicateAction extends Schema.InteractAction, RdfResource {
  about: Schema.Thing | undefined;
  inLanguage: Schema.Language | undefined;
  inLanguageLiteral: string | undefined;
  language: Schema.Language | undefined;
  recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
}

export function CommunicateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CommunicateActionClass extends InteractActionMixin(Resource) implements CommunicateAction {
    @property.resource()
    about: Schema.Thing | undefined;
    @property.resource()
    inLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.inLanguage })
    inLanguageLiteral: string | undefined;
    @property.resource()
    language: Schema.Language | undefined;
    @property.resource()
    recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
  }
  return CommunicateActionClass
}

class CommunicateActionImpl extends CommunicateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CommunicateAction>) {
    super(arg, init)
    this.types.add(schema.CommunicateAction)
  }

  static readonly __mixins: Mixin[] = [CommunicateActionMixin, InteractActionMixin];
}
CommunicateActionMixin.appliesTo = schema.CommunicateAction
CommunicateActionMixin.Class = CommunicateActionImpl
