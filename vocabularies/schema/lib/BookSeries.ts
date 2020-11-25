import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkSeriesMixin } from './CreativeWorkSeries';

export interface BookSeries<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWorkSeries<ID>, RdfResource<ID> {
}

export function BookSeriesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BookSeriesClass extends CreativeWorkSeriesMixin(Resource) implements BookSeries {
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
