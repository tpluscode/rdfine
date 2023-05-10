import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Clip<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
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

export function ClipMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Clip> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ClipClass extends CreativeWorkMixin(Resource) implements Partial<Clip> {
    @rdfine.property.resource()
    actor: Schema.Person | undefined;
    @rdfine.property.resource()
    actors: Schema.Person | undefined;
    @rdfine.property.literal()
    clipNumber: number | string | undefined;
    @rdfine.property.resource()
    director: Schema.Person | undefined;
    @rdfine.property.resource()
    directors: Schema.Person | undefined;
    @rdfine.property.resource()
    endOffset: Schema.HyperTocEntry | undefined;
    @rdfine.property.literal({ path: schema.endOffset, type: Number })
    endOffsetLiteral: number | undefined;
    @rdfine.property.resource()
    musicBy: Schema.MusicGroup | Schema.Person | undefined;
    @rdfine.property.resource()
    partOfEpisode: Schema.Episode | undefined;
    @rdfine.property.resource()
    partOfSeason: Schema.CreativeWorkSeason | undefined;
    @rdfine.property.resource()
    partOfSeries: Schema.CreativeWorkSeries | undefined;
    @rdfine.property.resource()
    startOffset: Schema.HyperTocEntry | undefined;
    @rdfine.property.literal({ path: schema.startOffset, type: Number })
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
