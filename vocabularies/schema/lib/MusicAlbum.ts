import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MusicPlaylistMixin } from './MusicPlaylist';

export interface MusicAlbum<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MusicPlaylist<D>, RdfResource<D> {
  albumProductionType: Schema.MusicAlbumProductionType | undefined;
  albumRelease: Schema.MusicRelease<D> | undefined;
  albumReleaseType: Schema.MusicAlbumReleaseType | undefined;
  byArtist: Schema.MusicGroup<D> | Schema.Person<D> | undefined;
}

export function MusicAlbumMixin<Base extends Constructor>(Resource: Base): Constructor<MusicAlbum> & Base {
  @namespace(schema)
  class MusicAlbumClass extends MusicPlaylistMixin(Resource) implements Partial<MusicAlbum> {
    @property()
    albumProductionType: Schema.MusicAlbumProductionType | undefined;
    @property.resource()
    albumRelease: Schema.MusicRelease | undefined;
    @property()
    albumReleaseType: Schema.MusicAlbumReleaseType | undefined;
    @property.resource()
    byArtist: Schema.MusicGroup | Schema.Person | undefined;
  }
  return MusicAlbumClass
}

class MusicAlbumImpl extends MusicAlbumMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicAlbum>) {
    super(arg, init)
    this.types.add(schema.MusicAlbum)
  }

  static readonly __mixins: Mixin[] = [MusicAlbumMixin, MusicPlaylistMixin];
}
MusicAlbumMixin.appliesTo = schema.MusicAlbum
MusicAlbumMixin.Class = MusicAlbumImpl
