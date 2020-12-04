import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EpisodeMixin } from './Episode';

export interface TVEpisode<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Episode<D>, RdfResource<D> {
  countryOfOrigin: Schema.Country<D> | undefined;
  partOfTVSeries: Schema.TVSeries<D> | undefined;
  subtitleLanguage: Schema.Language<D> | undefined;
  subtitleLanguageLiteral: string | undefined;
  titleEIDR: string | undefined;
  titleEIDRTerm: RDF.NamedNode | undefined;
}

export function TVEpisodeMixin<Base extends Constructor>(Resource: Base): Constructor<TVEpisode> & Base {
  @namespace(schema)
  class TVEpisodeClass extends EpisodeMixin(Resource) implements TVEpisode {
    @property.resource()
    countryOfOrigin: Schema.Country | undefined;
    @property.resource()
    partOfTVSeries: Schema.TVSeries | undefined;
    @property.resource()
    subtitleLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.subtitleLanguage })
    subtitleLanguageLiteral: string | undefined;
    @property.literal()
    titleEIDR: string | undefined;
    @property({ path: schema.titleEIDR })
    titleEIDRTerm: RDF.NamedNode | undefined;
  }
  return TVEpisodeClass
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
