import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface CreativeWorkSeason<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, RdfResource<ID> {
  actor: Schema.Person<SiblingNode<ID>> | undefined;
  director: Schema.Person<SiblingNode<ID>> | undefined;
  endDate: Date | undefined;
  episode: Schema.Episode<SiblingNode<ID>> | undefined;
  episodes: Schema.Episode<SiblingNode<ID>> | undefined;
  numberOfEpisodes: number | undefined;
  partOfSeries: Schema.CreativeWorkSeries<SiblingNode<ID>> | undefined;
  productionCompany: Schema.Organization<SiblingNode<ID>> | undefined;
  seasonNumber: number | string | undefined;
  startDate: Date | undefined;
  trailer: Schema.VideoObject<SiblingNode<ID>> | undefined;
}

export function CreativeWorkSeasonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CreativeWorkSeasonClass extends CreativeWorkMixin(Resource) implements CreativeWorkSeason {
    @property.resource()
    actor: Schema.Person | undefined;
    @property.resource()
    director: Schema.Person | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    endDate: Date | undefined;
    @property.resource()
    episode: Schema.Episode | undefined;
    @property.resource()
    episodes: Schema.Episode | undefined;
    @property.literal({ type: Number })
    numberOfEpisodes: number | undefined;
    @property.resource()
    partOfSeries: Schema.CreativeWorkSeries | undefined;
    @property.resource()
    productionCompany: Schema.Organization | undefined;
    @property.literal()
    seasonNumber: number | string | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    startDate: Date | undefined;
    @property.resource()
    trailer: Schema.VideoObject | undefined;
  }
  return CreativeWorkSeasonClass
}

class CreativeWorkSeasonImpl extends CreativeWorkSeasonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CreativeWorkSeason>) {
    super(arg, init)
    this.types.add(schema.CreativeWorkSeason)
  }

  static readonly __mixins: Mixin[] = [CreativeWorkSeasonMixin, CreativeWorkMixin];
}
CreativeWorkSeasonMixin.appliesTo = schema.CreativeWorkSeason
CreativeWorkSeasonMixin.Class = CreativeWorkSeasonImpl
