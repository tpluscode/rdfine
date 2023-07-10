import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MessageMixin } from './Message.js';

export interface EmailMessage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Message<D>, rdfine.RdfResource<D> {
}

export function EmailMessageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<EmailMessage & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class EmailMessageClass extends MessageMixin(Resource) {
  }
  return EmailMessageClass as any
}

class EmailMessageImpl extends EmailMessageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EmailMessage>) {
    super(arg, init)
    this.types.add(schema.EmailMessage)
  }

  static readonly __mixins: Mixin[] = [EmailMessageMixin, MessageMixin];
}
EmailMessageMixin.appliesTo = schema.EmailMessage
EmailMessageMixin.Class = EmailMessageImpl

export const fromPointer = createFactory<EmailMessage>([MessageMixin, EmailMessageMixin], { types: [schema.EmailMessage] });
