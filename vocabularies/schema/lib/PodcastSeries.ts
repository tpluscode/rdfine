import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkSeriesMixin } from './CreativeWorkSeries';

export interface PodcastSeries<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWorkSeries<ID>, RdfResource<ID> {
  webFeed: Schema.DataFeed<SiblingNode<ID>> | undefined;
}

export function PodcastSeriesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PodcastSeriesClass extends CreativeWorkSeriesMixin(Resource) implements PodcastSeries {
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
