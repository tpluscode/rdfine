import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MusicVideoObject)
  }
}
MusicVideoObjectMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicVideoObject)
MusicVideoObjectMixin.Class = MusicVideoObjectImpl
