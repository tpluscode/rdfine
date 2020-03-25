import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkSeriesMixin from './CreativeWorkSeries';

export interface BookSeries extends Schema.CreativeWorkSeries, RdfResource {
}

export default function BookSeriesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BookSeriesClass extends CreativeWorkSeriesMixin(Resource) implements BookSeries {
  }
  return BookSeriesClass
}

class BookSeriesImpl extends BookSeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<BookSeries>) {
    super(arg)
    this.types.add(schema.BookSeries)
    initializeProperties<BookSeries>(this, init)
  }
}
BookSeriesMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BookSeries)
BookSeriesMixin.Class = BookSeriesImpl
