import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkSeriesMixin } from './CreativeWorkSeries.js';

export interface BookSeries<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWorkSeries<D>, RdfResource<D> {
}

export function BookSeriesMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BookSeries> & RdfResourceCore> & Base {
  @namespace(schema)
  class BookSeriesClass extends CreativeWorkSeriesMixin(Resource) implements Partial<BookSeries> {
  }
  return BookSeriesClass
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
