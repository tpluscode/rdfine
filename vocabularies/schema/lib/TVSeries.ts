import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';
import { CreativeWorkSeriesMixin } from './CreativeWorkSeries';

export interface TVSeries<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, Schema.CreativeWorkSeries<D>, RdfResource<D> {
  actor: Schema.Person<D> | undefined;
  actors: Schema.Person<D> | undefined;
  containsSeason: Schema.CreativeWorkSeason<D> | undefined;
  countryOfOrigin: Schema.Country<D> | undefined;
  director: Schema.Person<D> | undefined;
  directors: Schema.Person<D> | undefined;
  episode: Schema.Episode<D> | undefined;
  episodes: Schema.Episode<D> | undefined;
  musicBy: Schema.MusicGroup<D> | Schema.Person<D> | undefined;
  numberOfEpisodes: number | undefined;
  numberOfSeasons: number | undefined;
  productionCompany: Schema.Organization<D> | undefined;
  season: Schema.CreativeWorkSeason<D> | undefined;
  seasons: Schema.CreativeWorkSeason<D> | undefined;
  trailer: Schema.VideoObject<D> | undefined;
}

export function TVSeriesMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TVSeries> & RdfResourceCore> & Base {
  @namespace(schema)
  class TVSeriesClass extends CreativeWorkSeriesMixin(CreativeWorkMixin(Resource)) implements Partial<TVSeries> {
    @property.resource()
    actor: Schema.Person | undefined;
    @property.resource()
    actors: Schema.Person | undefined;
    @property.resource()
    containsSeason: Schema.CreativeWorkSeason | undefined;
    @property.resource()
    countryOfOrigin: Schema.Country | undefined;
    @property.resource()
    director: Schema.Person | undefined;
    @property.resource()
    directors: Schema.Person | undefined;
    @property.resource()
    episode: Schema.Episode | undefined;
    @property.resource()
    episodes: Schema.Episode | undefined;
    @property.resource()
    musicBy: Schema.MusicGroup | Schema.Person | undefined;
    @property.literal({ type: Number })
    numberOfEpisodes: number | undefined;
    @property.literal({ type: Number })
    numberOfSeasons: number | undefined;
    @property.resource()
    productionCompany: Schema.Organization | undefined;
    @property.resource()
    season: Schema.CreativeWorkSeason | undefined;
    @property.resource()
    seasons: Schema.CreativeWorkSeason | undefined;
    @property.resource()
    trailer: Schema.VideoObject | undefined;
  }
  return TVSeriesClass
}

class TVSeriesImpl extends TVSeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TVSeries>) {
    super(arg, init)
    this.types.add(schema.TVSeries)
  }

  static readonly __mixins: Mixin[] = [TVSeriesMixin, CreativeWorkMixin, CreativeWorkSeriesMixin];
}
TVSeriesMixin.appliesTo = schema.TVSeries
TVSeriesMixin.Class = TVSeriesImpl
