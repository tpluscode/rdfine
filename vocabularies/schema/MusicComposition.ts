import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface MusicComposition extends Schema.CreativeWork, RdfResource {
  composer: Schema.Organization | Schema.Person;
  firstPerformance: Schema.Event;
  includedComposition: MusicComposition;
  iswcCode: string;
  lyricist: Schema.Person;
  lyrics: Schema.CreativeWork;
  musicalKey: string;
  musicArrangement: MusicComposition;
  musicCompositionForm: string;
  recordedAs: Schema.MusicRecording;
}

export default function MusicCompositionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicCompositionClass extends CreativeWorkMixin(Resource) implements MusicComposition {
    @property.resource()
    composer!: Schema.Organization | Schema.Person;
    @property.resource()
    firstPerformance!: Schema.Event;
    @property.resource()
    includedComposition!: MusicComposition;
    @property.literal()
    iswcCode!: string;
    @property.resource()
    lyricist!: Schema.Person;
    @property.resource()
    lyrics!: Schema.CreativeWork;
    @property.literal()
    musicalKey!: string;
    @property.resource()
    musicArrangement!: MusicComposition;
    @property.literal()
    musicCompositionForm!: string;
    @property.resource()
    recordedAs!: Schema.MusicRecording;
  }
  return MusicCompositionClass
}

class MusicCompositionImpl extends MusicCompositionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<MusicComposition>) {
    super(arg)
    this.types.add(schema.MusicComposition)
    initializeProperties<MusicComposition>(this, init)
  }
}
MusicCompositionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicComposition)
MusicCompositionMixin.Class = MusicCompositionImpl
