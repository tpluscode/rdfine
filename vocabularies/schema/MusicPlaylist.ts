import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface MusicPlaylist extends Schema.CreativeWork, RdfResource {
  numTracks: number;
  track: Schema.ItemList | Schema.MusicRecording;
  tracks: Schema.MusicRecording;
}

export function MusicPlaylistMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicPlaylistClass extends CreativeWorkMixin(Resource) implements MusicPlaylist {
    @property.literal({ type: Number })
    numTracks!: number;
    @property.resource()
    track!: Schema.ItemList | Schema.MusicRecording;
    @property.resource()
    tracks!: Schema.MusicRecording;
  }
  return MusicPlaylistClass
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
