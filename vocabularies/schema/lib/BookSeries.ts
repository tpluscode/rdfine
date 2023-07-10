import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkSeriesMixin } from './CreativeWorkSeries.js';

export interface BookSeries<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWorkSeries<D>, rdfine.RdfResource<D> {
}

export function BookSeriesMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<BookSeries & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BookSeriesClass extends CreativeWorkSeriesMixin(Resource) {
  }
  return BookSeriesClass as any
}

class BookSeriesImpl extends BookSeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BookSeries>) {
    super(arg, init)
    this.types.add(schema.BookSeries)
  }

  static readonly __mixins: Mixin[] = [BookSeriesMixin, CreativeWorkSeriesMixin];
}
BookSeriesMixin.appliesTo = schema.BookSeries
BookSeriesMixin.Class = BookSeriesImpl

export const fromPointer = createFactory<BookSeries>([CreativeWorkSeriesMixin, BookSeriesMixin], { types: [schema.BookSeries] });
