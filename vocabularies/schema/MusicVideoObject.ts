import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import MediaObjectMixin from './MediaObject';

export interface MusicVideoObject extends Schema.MediaObject, RdfResource {
}

export default function MusicVideoObjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicVideoObjectClass extends MediaObjectMixin(Resource) implements MusicVideoObject {
  }
  return MusicVideoObjectClass
}

class MusicVideoObjectImpl extends MusicVideoObjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<MusicVideoObject>) {
    super(arg)
    this.types.add(schema.MusicVideoObject)
    initializeProperties(this, init)
  }
}
MusicVideoObjectMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicVideoObject)
MusicVideoObjectMixin.Class = MusicVideoObjectImpl
