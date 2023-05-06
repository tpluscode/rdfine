import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkSeriesMixin } from './CreativeWorkSeries.js';

export interface PodcastSeries<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWorkSeries<D>, RdfResource<D> {
  actor: Schema.Person<D> | undefined;
  webFeed: Schema.DataFeed<D> | undefined;
}

export function PodcastSeriesMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PodcastSeries> & RdfResourceCore> & Base {
  @namespace(schema)
  class PodcastSeriesClass extends CreativeWorkSeriesMixin(Resource) implements Partial<PodcastSeries> {
    @property.resource()
    actor: Schema.Person | undefined;
    @property.resource()
    webFeed: Schema.DataFeed | undefined;
  }
  return PodcastSeriesClass
}

class PodcastSeriesImpl extends PodcastSeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PodcastSeries>) {
    super(arg, init)
    this.types.add(schema.PodcastSeries)
  }

  static readonly __mixins: Mixin[] = [PodcastSeriesMixin, CreativeWorkSeriesMixin];
}
PodcastSeriesMixin.appliesTo = schema.PodcastSeries
PodcastSeriesMixin.Class = PodcastSeriesImpl

export const fromPointer = createFactory<PodcastSeries>([CreativeWorkSeriesMixin, PodcastSeriesMixin], { types: [schema.PodcastSeries] });
