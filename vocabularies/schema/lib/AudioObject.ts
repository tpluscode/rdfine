import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MediaObjectMixin } from './MediaObject.js';

export interface AudioObject<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MediaObject<D>, rdfine.RdfResource<D> {
  caption: Schema.MediaObject<D> | undefined;
  captionLiteral: string | undefined;
  embeddedTextCaption: string | undefined;
  transcript: string | undefined;
}

export function AudioObjectMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AudioObject> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AudioObjectClass extends MediaObjectMixin(Resource) implements Partial<AudioObject> {
    @rdfine.property.resource()
    caption: Schema.MediaObject | undefined;
    @rdfine.property.literal({ path: schema.caption })
    captionLiteral: string | undefined;
    @rdfine.property.literal()
    embeddedTextCaption: string | undefined;
    @rdfine.property.literal()
    transcript: string | undefined;
  }
  return AudioObjectClass
}

class AudioObjectImpl extends AudioObjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AudioObject>) {
    super(arg, init)
    this.types.add(schema.AudioObject)
  }

  static readonly __mixins: Mixin[] = [AudioObjectMixin, MediaObjectMixin];
}
AudioObjectMixin.appliesTo = schema.AudioObject
AudioObjectMixin.Class = AudioObjectImpl

export const fromPointer = createFactory<AudioObject>([MediaObjectMixin, AudioObjectMixin], { types: [schema.AudioObject] });
