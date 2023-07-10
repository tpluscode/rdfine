import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface MusicPlaylist<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  numTracks: number | undefined;
  track: Schema.ItemList<D> | Schema.MusicRecording<D> | undefined;
  tracks: Schema.MusicRecording<D> | undefined;
}

export function MusicPlaylistMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MusicPlaylist & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MusicPlaylistClass extends CreativeWorkMixin(Resource) {
    @rdfine.property.literal({ type: Number })
    numTracks: number | undefined;
    @rdfine.property.resource()
    track: Schema.ItemList | Schema.MusicRecording | undefined;
    @rdfine.property.resource()
    tracks: Schema.MusicRecording | undefined;
  }
  return MusicPlaylistClass as any
}

class MusicPlaylistImpl extends MusicPlaylistMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicPlaylist>) {
    super(arg, init)
    this.types.add(schema.MusicPlaylist)
  }

  static readonly __mixins: Mixin[] = [MusicPlaylistMixin, CreativeWorkMixin];
}
MusicPlaylistMixin.appliesTo = schema.MusicPlaylist
MusicPlaylistMixin.Class = MusicPlaylistImpl

export const fromPointer = createFactory<MusicPlaylist>([CreativeWorkMixin, MusicPlaylistMixin], { types: [schema.MusicPlaylist] });
