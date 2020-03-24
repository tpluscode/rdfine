import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Answer>) {
    super(arg)
    this.types.add(schema.Answer)
    initializeProperties(this, init)
  }
}
AnswerMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Answer)
AnswerMixin.Class = AnswerImpl
