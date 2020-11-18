import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface MusicRecording<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, RdfResource<ID> {
  byArtist: Schema.MusicGroup<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  duration: Schema.Duration<SiblingNode<ID>> | undefined;
  inAlbum: Schema.MusicAlbum<SiblingNode<ID>> | undefined;
  inPlaylist: Schema.MusicPlaylist<SiblingNode<ID>> | undefined;
  isrcCode: string | undefined;
  recordingOf: Schema.MusicComposition<SiblingNode<ID>> | undefined;
}

export function MusicRecordingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicRecordingClass extends CreativeWorkMixin(Resource) implements MusicRecording {
    @property.resource()
    byArtist: Schema.MusicGroup | Schema.Person | undefined;
    @property.resource()
    duration: Schema.Duration | undefined;
    @property.resource()
    inAlbum: Schema.MusicAlbum | undefined;
    @property.resource()
    inPlaylist: Schema.MusicPlaylist | undefined;
    @property.literal()
    isrcCode: string | undefined;
    @property.resource()
    recordingOf: Schema.MusicComposition | undefined;
  }
  return MusicRecordingClass
}

class MusicRecordingImpl extends MusicRecordingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicRecording>) {
    super(arg, init)
    this.types.add(schema.MusicRecording)
  }

  static readonly __mixins: Mixin[] = [MusicRecordingMixin, CreativeWorkMixin];
}
MusicRecordingMixin.appliesTo = schema.MusicRecording
MusicRecordingMixin.Class = MusicRecordingImpl
