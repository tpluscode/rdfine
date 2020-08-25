import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Question extends Schema.CreativeWork, RdfResource {
  acceptedAnswer: Schema.Answer | Schema.ItemList;
  answerCount: number;
  downvoteCount: number;
  suggestedAnswer: Schema.Answer | Schema.ItemList;
  upvoteCount: number;
}

export function QuestionMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: Initializer<Question>) {
    super(arg, init)
    this.types.add(schema.Question)
  }

  static readonly __mixins: Mixin[] = [QuestionMixin, CreativeWorkMixin];
}
QuestionMixin.appliesTo = schema.Question
QuestionMixin.Class = QuestionImpl
