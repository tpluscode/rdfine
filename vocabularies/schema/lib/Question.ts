import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CommentMixin } from './Comment.js';

export interface Question<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Comment<D>, RdfResource<D> {
  acceptedAnswer: Schema.Answer<D> | Schema.ItemList<D> | undefined;
  answerCount: number | undefined;
  eduQuestionType: string | undefined;
  suggestedAnswer: Schema.Answer<D> | Schema.ItemList<D> | undefined;
}

export function QuestionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Question> & RdfResourceCore> & Base {
  @namespace(schema)
  class QuestionClass extends CommentMixin(Resource) implements Partial<Question> {
    @property.resource()
    acceptedAnswer: Schema.Answer | Schema.ItemList | undefined;
    @property.literal({ type: Number })
    answerCount: number | undefined;
    @property.literal()
    eduQuestionType: string | undefined;
    @property.resource()
    suggestedAnswer: Schema.Answer | Schema.ItemList | undefined;
  }
  return QuestionClass
}

class QuestionImpl extends QuestionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Question>) {
    super(arg, init)
    this.types.add(schema.Question)
  }

  static readonly __mixins: Mixin[] = [QuestionMixin, CommentMixin];
}
QuestionMixin.appliesTo = schema.Question
QuestionMixin.Class = QuestionImpl

export const fromPointer = createFactory<Question>([CommentMixin, QuestionMixin], { types: [schema.Question] });
