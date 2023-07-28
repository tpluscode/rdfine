import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { IntransitiveActivityMixin } from './IntransitiveActivity.js';

export interface Question<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.IntransitiveActivity<D>, rdfine.RdfResource<D> {
  anyOf: As.Link<D> | As.Object<D> | undefined;
  oneOf: As.Link<D> | As.Object<D> | undefined;
}

export function QuestionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Question & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class QuestionClass extends IntransitiveActivityMixin(Resource) {
    @rdfine.property.resource()
    anyOf: As.Link | As.Object | undefined;
    @rdfine.property.resource()
    oneOf: As.Link | As.Object | undefined;
  }
  return QuestionClass as any
}

class QuestionImpl extends QuestionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Question>) {
    super(arg, init)
    this.types.add(as.Question)
  }

  static readonly __mixins: Mixin[] = [QuestionMixin, IntransitiveActivityMixin];
}
QuestionMixin.appliesTo = as.Question
QuestionMixin.Class = QuestionImpl

export const fromPointer = createFactory<Question>([IntransitiveActivityMixin, QuestionMixin], { types: [as.Question] });
