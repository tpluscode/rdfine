import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PeriodicalMixin } from './Periodical.js';

export interface Newspaper<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Periodical<D>, rdfine.RdfResource<D> {
}

export function NewspaperMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Newspaper> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class NewspaperClass extends PeriodicalMixin(Resource) implements Partial<Newspaper> {
  }
  return NewspaperClass
}

class NewspaperImpl extends NewspaperMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Newspaper>) {
    super(arg, init)
    this.types.add(schema.Newspaper)
  }

  static readonly __mixins: Mixin[] = [NewspaperMixin, PeriodicalMixin];
}
NewspaperMixin.appliesTo = schema.Newspaper
NewspaperMixin.Class = NewspaperImpl

export const fromPointer = createFactory<Newspaper>([PeriodicalMixin, NewspaperMixin], { types: [schema.Newspaper] });
