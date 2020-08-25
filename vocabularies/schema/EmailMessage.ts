import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { MessageMixin } from './Message';

export interface EmailMessage extends Schema.Message, RdfResource {
}

export function EmailMessageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EmailMessageClass extends MessageMixin(Resource) implements EmailMessage {
  }
  return EmailMessageClass
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
