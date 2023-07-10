import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CommentMixin } from './Comment.js';

export interface Answer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Comment<D>, rdfine.RdfResource<D> {
  answerExplanation: Schema.Comment<D> | Schema.WebContent<D> | undefined;
}

export function AnswerMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Answer & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AnswerClass extends CommentMixin(Resource) {
    @rdfine.property.resource()
    answerExplanation: Schema.Comment | Schema.WebContent | undefined;
  }
  return AnswerClass as any
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

export const fromPointer = createFactory<Answer>([CommentMixin, AnswerMixin], { types: [schema.Answer] });
