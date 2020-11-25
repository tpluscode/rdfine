import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface MusicComposition<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, RdfResource<ID> {
  composer: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  firstPerformance: Schema.Event<SiblingNode<ID>> | undefined;
  includedComposition: Schema.MusicComposition<SiblingNode<ID>> | undefined;
  iswcCode: string | undefined;
  lyricist: Schema.Person<SiblingNode<ID>> | undefined;
  lyrics: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  musicalKey: string | undefined;
  musicArrangement: Schema.MusicComposition<SiblingNode<ID>> | undefined;
  musicCompositionForm: string | undefined;
  recordedAs: Schema.MusicRecording<SiblingNode<ID>> | undefined;
}

export function MusicCompositionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicCompositionClass extends CreativeWorkMixin(Resource) implements MusicComposition {
    @property.resource()
    composer: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    firstPerformance: Schema.Event | undefined;
    @property.resource()
    includedComposition: Schema.MusicComposition | undefined;
    @property.literal()
    iswcCode: string | undefined;
    @property.resource()
    lyricist: Schema.Person | undefined;
    @property.resource()
    lyrics: Schema.CreativeWork | undefined;
    @property.literal()
    musicalKey: string | undefined;
    @property.resource()
    musicArrangement: Schema.MusicComposition | undefined;
    @property.literal()
    musicCompositionForm: string | undefined;
    @property.resource()
    recordedAs: Schema.MusicRecording | undefined;
  }
  return MusicCompositionClass
}

class MusicCompositionImpl extends MusicCompositionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicComposition>) {
    super(arg, init)
    this.types.add(schema.MusicComposition)
  }

  static readonly __mixins: Mixin[] = [MusicCompositionMixin, CreativeWorkMixin];
}
MusicCompositionMixin.appliesTo = schema.MusicComposition
MusicCompositionMixin.Class = MusicCompositionImpl
