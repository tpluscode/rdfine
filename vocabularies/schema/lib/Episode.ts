import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Episode<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  actor: Schema.Person<D> | undefined;
  actors: Schema.Person<D> | undefined;
  director: Schema.Person<D> | undefined;
  directors: Schema.Person<D> | undefined;
  duration: Schema.Duration<D> | undefined;
  episodeNumber: number | string | undefined;
  musicBy: Schema.MusicGroup<D> | Schema.Person<D> | undefined;
  partOfSeason: Schema.CreativeWorkSeason<D> | undefined;
  partOfSeries: Schema.CreativeWorkSeries<D> | undefined;
  productionCompany: Schema.Organization<D> | undefined;
  trailer: Schema.VideoObject<D> | undefined;
}

export function EpisodeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Episode> & RdfResourceCore> & Base {
  @namespace(schema)
  class EpisodeClass extends CreativeWorkMixin(Resource) implements Partial<Episode> {
    @property.resource()
    actor: Schema.Person | undefined;
    @property.resource()
    actors: Schema.Person | undefined;
    @property.resource()
    director: Schema.Person | undefined;
    @property.resource()
    directors: Schema.Person | undefined;
    @property.resource()
    duration: Schema.Duration | undefined;
    @property.literal()
    episodeNumber: number | string | undefined;
    @property.resource()
    musicBy: Schema.MusicGroup | Schema.Person | undefined;
    @property.resource()
    partOfSeason: Schema.CreativeWorkSeason | undefined;
    @property.resource()
    partOfSeries: Schema.CreativeWorkSeries | undefined;
    @property.resource()
    productionCompany: Schema.Organization | undefined;
    @property.resource()
    trailer: Schema.VideoObject | undefined;
  }
  return EpisodeClass
}

class EpisodeImpl extends EpisodeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Episode>) {
    super(arg, init)
    this.types.add(schema.Episode)
  }

  static readonly __mixins: Mixin[] = [EpisodeMixin, CreativeWorkMixin];
}
EpisodeMixin.appliesTo = schema.Episode
EpisodeMixin.Class = EpisodeImpl

export const fromPointer = createFactory<Episode>([CreativeWorkMixin, EpisodeMixin], { types: [schema.Episode] });
