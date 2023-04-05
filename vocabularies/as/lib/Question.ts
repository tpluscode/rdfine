import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { IntransitiveActivityMixin } from './IntransitiveActivity';

export interface Question<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.IntransitiveActivity<D>, RdfResource<D> {
  anyOf: As.Link<D> | As.Object<D> | undefined;
  oneOf: As.Link<D> | As.Object<D> | undefined;
}

export function QuestionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Question> & RdfResourceCore> & Base {
  @namespace(as)
  class QuestionClass extends IntransitiveActivityMixin(Resource) implements Partial<Question> {
    @property.resource()
    anyOf: As.Link | As.Object | undefined;
    @property.resource()
    oneOf: As.Link | As.Object | undefined;
  }
  return QuestionClass
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
