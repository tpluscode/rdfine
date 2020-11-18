import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Clip<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, RdfResource<ID> {
  actor: Schema.Person<SiblingNode<ID>> | undefined;
  actors: Schema.Person<SiblingNode<ID>> | undefined;
  clipNumber: number | string | undefined;
  director: Schema.Person<SiblingNode<ID>> | undefined;
  directors: Schema.Person<SiblingNode<ID>> | undefined;
  endOffset: number | undefined;
  musicBy: Schema.MusicGroup<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  partOfEpisode: Schema.Episode<SiblingNode<ID>> | undefined;
  partOfSeason: Schema.CreativeWorkSeason<SiblingNode<ID>> | undefined;
  partOfSeries: Schema.CreativeWorkSeries<SiblingNode<ID>> | undefined;
  startOffset: number | undefined;
}

export function ClipMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ClipClass extends CreativeWorkMixin(Resource) implements Clip {
    @property.resource()
    actor: Schema.Person | undefined;
    @property.resource()
    actors: Schema.Person | undefined;
    @property.literal()
    clipNumber: number | string | undefined;
    @property.resource()
    director: Schema.Person | undefined;
    @property.resource()
    directors: Schema.Person | undefined;
    @property.literal({ type: Number })
    endOffset: number | undefined;
    @property.resource()
    musicBy: Schema.MusicGroup | Schema.Person | undefined;
    @property.resource()
    partOfEpisode: Schema.Episode | undefined;
    @property.resource()
    partOfSeason: Schema.CreativeWorkSeason | undefined;
    @property.resource()
    partOfSeries: Schema.CreativeWorkSeries | undefined;
    @property.literal({ type: Number })
    startOffset: number | undefined;
  }
  return ClipClass
}

class ClipImpl extends ClipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Clip>) {
    super(arg, init)
    this.types.add(schema.Clip)
  }

  static readonly __mixins: Mixin[] = [ClipMixin, CreativeWorkMixin];
}
ClipMixin.appliesTo = schema.Clip
ClipMixin.Class = ClipImpl
