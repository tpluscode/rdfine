import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface MusicPlaylist<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  numTracks: number | undefined;
  track: Schema.ItemList<D> | Schema.MusicRecording<D> | undefined;
  tracks: Schema.MusicRecording<D> | undefined;
}

export function MusicPlaylistMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MusicPlaylist> & RdfResourceCore> & Base {
  @namespace(schema)
  class MusicPlaylistClass extends CreativeWorkMixin(Resource) implements Partial<MusicPlaylist> {
    @property.literal({ type: Number })
    numTracks: number | undefined;
    @property.resource()
    track: Schema.ItemList | Schema.MusicRecording | undefined;
    @property.resource()
    tracks: Schema.MusicRecording | undefined;
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

export const fromPointer = createFactory<MusicPlaylist>([CreativeWorkMixin, MusicPlaylistMixin], { types: [schema.MusicPlaylist] });
