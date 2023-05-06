import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Clip<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  actor: Schema.Person<D> | undefined;
  actors: Schema.Person<D> | undefined;
  clipNumber: number | string | undefined;
  director: Schema.Person<D> | undefined;
  directors: Schema.Person<D> | undefined;
  endOffset: Schema.HyperTocEntry<D> | undefined;
  endOffsetLiteral: number | undefined;
  musicBy: Schema.MusicGroup<D> | Schema.Person<D> | undefined;
  partOfEpisode: Schema.Episode<D> | undefined;
  partOfSeason: Schema.CreativeWorkSeason<D> | undefined;
  partOfSeries: Schema.CreativeWorkSeries<D> | undefined;
  startOffset: Schema.HyperTocEntry<D> | undefined;
  startOffsetLiteral: number | undefined;
}

export function ClipMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Clip> & RdfResourceCore> & Base {
  @namespace(schema)
  class ClipClass extends CreativeWorkMixin(Resource) implements Partial<Clip> {
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
    @property.resource()
    endOffset: Schema.HyperTocEntry | undefined;
    @property.literal({ path: schema.endOffset, type: Number })
    endOffsetLiteral: number | undefined;
    @property.resource()
    musicBy: Schema.MusicGroup | Schema.Person | undefined;
    @property.resource()
    partOfEpisode: Schema.Episode | undefined;
    @property.resource()
    partOfSeason: Schema.CreativeWorkSeason | undefined;
    @property.resource()
    partOfSeries: Schema.CreativeWorkSeries | undefined;
    @property.resource()
    startOffset: Schema.HyperTocEntry | undefined;
    @property.literal({ path: schema.startOffset, type: Number })
    startOffsetLiteral: number | undefined;
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

export const fromPointer = createFactory<Clip>([CreativeWorkMixin, ClipMixin], { types: [schema.Clip] });
