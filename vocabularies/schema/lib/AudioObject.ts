import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MediaObjectMixin } from './MediaObject';

export interface AudioObject<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MediaObject<D>, RdfResource<D> {
  caption: Schema.MediaObject<D> | undefined;
  captionLiteral: string | undefined;
  transcript: string | undefined;
}

export function AudioObjectMixin<Base extends Constructor>(Resource: Base): Constructor<AudioObject> & Base {
  @namespace(schema)
  class AudioObjectClass extends MediaObjectMixin(Resource) implements Partial<AudioObject> {
    @property.resource()
    caption: Schema.MediaObject | undefined;
    @property.literal({ path: schema.caption })
    captionLiteral: string | undefined;
    @property.literal()
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
