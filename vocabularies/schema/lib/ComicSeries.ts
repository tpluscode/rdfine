import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PeriodicalMixin } from './Periodical.js';

export interface ComicSeries<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Periodical<D>, RdfResource<D> {
}

export function ComicSeriesMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ComicSeries> & RdfResourceCore> & Base {
  @namespace(schema)
  class ComicSeriesClass extends PeriodicalMixin(Resource) implements Partial<ComicSeries> {
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

export const fromPointer = createFactory<ComicSeries>([PeriodicalMixin, ComicSeriesMixin], { types: [schema.ComicSeries] });
