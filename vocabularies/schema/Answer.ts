import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CommentMixin from './Comment';

export interface Answer extends Schema.Comment, RdfResource {
}

export default function AnswerMixin<Base extends Constructor>(Resource: Base) {
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
}
AnswerMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Answer)
AnswerMixin.Class = AnswerImpl
