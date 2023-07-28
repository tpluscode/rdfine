import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ClipMixin } from './Clip.js';

export interface RadioClip<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Clip<D>, rdfine.RdfResource<D> {
}

export function RadioClipMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<RadioClip & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class RadioClipClass extends ClipMixin(Resource) {
  }
  return RadioClipClass as any
}

class RadioClipImpl extends RadioClipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RadioClip>) {
    super(arg, init)
    this.types.add(schema.RadioClip)
  }

  static readonly __mixins: Mixin[] = [RadioClipMixin, ClipMixin];
}
RadioClipMixin.appliesTo = schema.RadioClip
RadioClipMixin.Class = RadioClipImpl

export const fromPointer = createFactory<RadioClip>([ClipMixin, RadioClipMixin], { types: [schema.RadioClip] });
