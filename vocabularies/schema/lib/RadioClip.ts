import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ClipMixin } from './Clip.js';

export interface RadioClip<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Clip<D>, RdfResource<D> {
}

export function RadioClipMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RadioClip> & RdfResourceCore> & Base {
  @namespace(schema)
  class RadioClipClass extends ClipMixin(Resource) implements Partial<RadioClip> {
  }
  return RadioClipClass
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
