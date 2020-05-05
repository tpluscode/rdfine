import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CommentMixin } from './Comment';

export interface Answer extends Schema.Comment, RdfResource {
}

export function AnswerMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AnswerClass extends CommentMixin(Resource) implements Answer {
  }
  return AnswerClass
}

class AnswerImpl extends AnswerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Answer>) {
    super(arg, init)
    this.types.add(schema.Answer)
  }

  static readonly __mixins: Mixin[] = [AnswerMixin, CommentMixin];
}
AnswerMixin.appliesTo = schema.Answer
AnswerMixin.Class = AnswerImpl
