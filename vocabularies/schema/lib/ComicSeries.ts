import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PeriodicalMixin } from './Periodical';

export interface ComicSeries<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Periodical<D>, RdfResource<D> {
}

export function ComicSeriesMixin<Base extends Constructor>(Resource: Base): Constructor<ComicSeries> & Base {
  @namespace(schema)
  class ComicSeriesClass extends PeriodicalMixin(Resource) implements ComicSeries {
  }
  return ComicSeriesClass
}

class ComicSeriesImpl extends ComicSeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ComicSeries>) {
    super(arg, init)
    this.types.add(schema.ComicSeries)
  }

  static readonly __mixins: Mixin[] = [ComicSeriesMixin, PeriodicalMixin];
}
ComicSeriesMixin.appliesTo = schema.ComicSeries
ComicSeriesMixin.Class = ComicSeriesImpl
