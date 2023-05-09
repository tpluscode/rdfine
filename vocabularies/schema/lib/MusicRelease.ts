import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MusicPlaylistMixin } from './MusicPlaylist.js';

export interface MusicRelease<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MusicPlaylist<D>, rdfine.RdfResource<D> {
  catalogNumber: string | undefined;
  creditedTo: Schema.Organization<D> | Schema.Person<D> | undefined;
  duration: Schema.Duration<D> | undefined;
  musicReleaseFormat: Schema.MusicReleaseFormatType | undefined;
  recordLabel: Schema.Organization<D> | undefined;
  releaseOf: Schema.MusicAlbum<D> | undefined;
}

export function MusicReleaseMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MusicRelease> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MusicReleaseClass extends MusicPlaylistMixin(Resource) implements Partial<MusicRelease> {
    @rdfine.property.literal()
    catalogNumber: string | undefined;
    @rdfine.property.resource()
    creditedTo: Schema.Organization | Schema.Person | undefined;
    @rdfine.property.resource()
    duration: Schema.Duration | undefined;
    @rdfine.property()
    musicReleaseFormat: Schema.MusicReleaseFormatType | undefined;
    @rdfine.property.resource()
    recordLabel: Schema.Organization | undefined;
    @rdfine.property.resource()
    releaseOf: Schema.MusicAlbum | undefined;
  }
  return MusicReleaseClass
}

class MusicReleaseImpl extends MusicReleaseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicRelease>) {
    super(arg, init)
    this.types.add(schema.MusicRelease)
  }

  static readonly __mixins: Mixin[] = [MusicReleaseMixin, MusicPlaylistMixin];
}
MusicReleaseMixin.appliesTo = schema.MusicRelease
MusicReleaseMixin.Class = MusicReleaseImpl

export const fromPointer = createFactory<MusicRelease>([MusicPlaylistMixin, MusicReleaseMixin], { types: [schema.MusicRelease] });
