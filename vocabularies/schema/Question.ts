import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Question extends Schema.CreativeWork, RdfResource {
  acceptedAnswer: Schema.Answer | Schema.ItemList;
  answerCount: number;
  downvoteCount: number;
  suggestedAnswer: Schema.Answer | Schema.ItemList;
  upvoteCount: number;
}

export default function QuestionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class QuestionClass extends CreativeWorkMixin(Resource) implements Question {
    @property.resource()
    acceptedAnswer!: Schema.Answer | Schema.ItemList;
    @property.literal({ type: Number })
    answerCount!: number;
    @property.literal({ type: Number })
    downvoteCount!: number;
    @property.resource()
    suggestedAnswer!: Schema.Answer | Schema.ItemList;
    @property.literal({ type: Number })
    upvoteCount!: number;
  }
  return QuestionClass
}

class QuestionImpl extends QuestionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Question)
  }
}
QuestionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Question)
QuestionMixin.Class = QuestionImpl