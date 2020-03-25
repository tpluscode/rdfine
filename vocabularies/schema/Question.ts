import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Question>) {
    super(arg)
    this.types.add(schema.Question)
    initializeProperties<Question>(this, init)
  }
}
QuestionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Question)
QuestionMixin.Class = QuestionImpl
