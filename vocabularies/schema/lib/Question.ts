import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Question<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  acceptedAnswer: Schema.Answer<D> | Schema.ItemList<D> | undefined;
  answerCount: number | undefined;
  downvoteCount: number | undefined;
  suggestedAnswer: Schema.Answer<D> | Schema.ItemList<D> | undefined;
  upvoteCount: number | undefined;
}

export function QuestionMixin<Base extends Constructor>(Resource: Base): Constructor<Question> & Base {
  @namespace(schema)
  class QuestionClass extends CreativeWorkMixin(Resource) implements Question {
    @property.resource()
    acceptedAnswer: Schema.Answer | Schema.ItemList | undefined;
    @property.literal({ type: Number })
    answerCount: number | undefined;
    @property.literal({ type: Number })
    downvoteCount: number | undefined;
    @property.resource()
    suggestedAnswer: Schema.Answer | Schema.ItemList | undefined;
    @property.literal({ type: Number })
    upvoteCount: number | undefined;
  }
  return QuestionClass
}

class QuestionImpl extends QuestionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Question>) {
    super(arg, init)
    this.types.add(schema.Question)
  }

  static readonly __mixins: Mixin[] = [QuestionMixin, CreativeWorkMixin];
}
QuestionMixin.appliesTo = schema.Question
QuestionMixin.Class = QuestionImpl
