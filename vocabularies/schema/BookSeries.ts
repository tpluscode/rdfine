import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BookSeries)
  }
}
BookSeriesMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BookSeries)
BookSeriesMixin.Class = BookSeriesImpl
