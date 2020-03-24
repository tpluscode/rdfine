import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import MediaObjectMixin from './MediaObject';

export interface AudioObject extends Schema.MediaObject, RdfResource {
  caption: Schema.MediaObject;
  captionLiteral: string;
  transcript: string;
}

export default function AudioObjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AudioObjectClass extends MediaObjectMixin(Resource) implements AudioObject {
    @property.resource()
    caption!: Schema.MediaObject;
    @property.literal({ path: schema.caption })
    captionLiteral!: string;
    @property.literal()
    transcript!: string;
  }
  return AudioObjectClass
}

class AudioObjectImpl extends AudioObjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<AudioObject>) {
    super(arg)
    this.types.add(schema.AudioObject)
    initializeProperties(this, init)
  }
}
AudioObjectMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AudioObject)
AudioObjectMixin.Class = AudioObjectImpl
