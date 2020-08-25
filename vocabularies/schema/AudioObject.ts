import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { MediaObjectMixin } from './MediaObject';

export interface AudioObject extends Schema.MediaObject, RdfResource {
  caption: Schema.MediaObject;
  captionLiteral: string;
  transcript: string;
}

export function AudioObjectMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: Initializer<AudioObject>) {
    super(arg, init)
    this.types.add(schema.AudioObject)
  }

  static readonly __mixins: Mixin[] = [AudioObjectMixin, MediaObjectMixin];
}
AudioObjectMixin.appliesTo = schema.AudioObject
AudioObjectMixin.Class = AudioObjectImpl
