import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { ClipMixin } from './Clip';

export interface RadioClip extends Schema.Clip, RdfResource {
}

export function RadioClipMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RadioClipClass extends ClipMixin(Resource) implements RadioClip {
  }
  return RadioClipClass
}

class RadioClipImpl extends RadioClipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RadioClip>) {
    super(arg, init)
    this.types.add(schema.RadioClip)
  }
}
RadioClipMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RadioClip)
RadioClipMixin.Class = RadioClipImpl
