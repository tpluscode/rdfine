import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InteractActionMixin } from './InteractAction.js';

export interface CommunicateAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InteractAction<D>, RdfResource<D> {
  about: Schema.Thing<D> | undefined;
  inLanguage: Schema.Language<D> | undefined;
  inLanguageLiteral: string | undefined;
  language: Schema.Language<D> | undefined;
  recipient: Schema.Audience<D> | Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function CommunicateActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CommunicateAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class CommunicateActionClass extends InteractActionMixin(Resource) implements Partial<CommunicateAction> {
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

export const fromPointer = createFactory<CommunicateAction>([InteractActionMixin, CommunicateActionMixin], { types: [schema.CommunicateAction] });
