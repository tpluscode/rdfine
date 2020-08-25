import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { MusicPlaylistMixin } from './MusicPlaylist';

export interface MusicRelease extends Schema.MusicPlaylist, RdfResource {
  catalogNumber: string;
  creditedTo: Schema.Organization | Schema.Person;
  duration: Schema.Duration;
  musicReleaseFormat: Schema.MusicReleaseFormatType;
  recordLabel: Schema.Organization;
  releaseOf: Schema.MusicAlbum;
}

export function MusicReleaseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicReleaseClass extends MusicPlaylistMixin(Resource) implements MusicRelease {
    @property.literal()
    catalogNumber!: string;
    @property.resource()
    creditedTo!: Schema.Organization | Schema.Person;
    @property.resource()
    duration!: Schema.Duration;
    @property()
    musicReleaseFormat!: Schema.MusicReleaseFormatType;
    @property.resource()
    recordLabel!: Schema.Organization;
    @property.resource()
    releaseOf!: Schema.MusicAlbum;
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
