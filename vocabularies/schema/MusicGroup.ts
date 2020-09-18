import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PerformingGroupMixin } from './PerformingGroup';

export interface MusicGroup extends Schema.PerformingGroup, RdfResource {
  album: Schema.MusicAlbum | undefined;
  albums: Schema.MusicAlbum | undefined;
  genre: string | undefined;
  genreTerm: RDF.NamedNode | undefined;
  musicGroupMember: Schema.Person | undefined;
  track: Schema.ItemList | Schema.MusicRecording | undefined;
  tracks: Schema.MusicRecording | undefined;
}

export function MusicGroupMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicGroupClass extends PerformingGroupMixin(Resource) implements MusicGroup {
    @property.resource()
    album: Schema.MusicAlbum | undefined;
    @property.resource()
    albums: Schema.MusicAlbum | undefined;
    @property.literal()
    genre: string | undefined;
    @property({ path: schema.genre })
    genreTerm: RDF.NamedNode | undefined;
    @property.resource()
    musicGroupMember: Schema.Person | undefined;
    @property.resource()
    track: Schema.ItemList | Schema.MusicRecording | undefined;
    @property.resource()
    tracks: Schema.MusicRecording | undefined;
  }
  return MusicGroupClass
}

class MusicGroupImpl extends MusicGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicGroup>) {
    super(arg, init)
    this.types.add(schema.MusicGroup)
  }

  static readonly __mixins: Mixin[] = [MusicGroupMixin, PerformingGroupMixin];
}
MusicGroupMixin.appliesTo = schema.MusicGroup
MusicGroupMixin.Class = MusicGroupImpl
