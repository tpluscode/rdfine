import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { MediaObjectMixin } from './MediaObject';

export interface MusicVideoObject extends Schema.MediaObject, RdfResource {
}

export function MusicVideoObjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicVideoObjectClass extends MediaObjectMixin(Resource) implements MusicVideoObject {
  }
  return MusicVideoObjectClass
}

class MusicVideoObjectImpl extends MusicVideoObjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicVideoObject>) {
    super(arg, init)
    this.types.add(schema.MusicVideoObject)
  }
}
MusicVideoObjectMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MusicVideoObject)
MusicVideoObjectMixin.Class = MusicVideoObjectImpl
