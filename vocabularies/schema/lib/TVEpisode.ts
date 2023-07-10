import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EpisodeMixin } from './Episode.js';

export interface TVEpisode<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Episode<D>, rdfine.RdfResource<D> {
  countryOfOrigin: Schema.Country<D> | undefined;
  partOfTVSeries: Schema.TVSeries<D> | undefined;
  subtitleLanguage: Schema.Language<D> | undefined;
  subtitleLanguageLiteral: string | undefined;
  titleEIDR: string | undefined;
  titleEIDRTerm: RDF.NamedNode | undefined;
}

export function TVEpisodeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TVEpisode & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TVEpisodeClass extends EpisodeMixin(Resource) {
    @rdfine.property.resource()
    countryOfOrigin: Schema.Country | undefined;
    @rdfine.property.resource()
    partOfTVSeries: Schema.TVSeries | undefined;
    @rdfine.property.resource()
    subtitleLanguage: Schema.Language | undefined;
    @rdfine.property.literal({ path: schema.subtitleLanguage })
    subtitleLanguageLiteral: string | undefined;
    @rdfine.property.literal()
    titleEIDR: string | undefined;
    @rdfine.property({ path: schema.titleEIDR })
    titleEIDRTerm: RDF.NamedNode | undefined;
  }
  return TVEpisodeClass as any
}

class TVEpisodeImpl extends TVEpisodeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TVEpisode>) {
    super(arg, init)
    this.types.add(schema.TVEpisode)
  }

  static readonly __mixins: Mixin[] = [TVEpisodeMixin, EpisodeMixin];
}
TVEpisodeMixin.appliesTo = schema.TVEpisode
TVEpisodeMixin.Class = TVEpisodeImpl

export const fromPointer = createFactory<TVEpisode>([EpisodeMixin, TVEpisodeMixin], { types: [schema.TVEpisode] });
