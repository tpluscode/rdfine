import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { DocumentMixin } from './Document';

export interface Audio<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Document<D>, RdfResource<D> {
}

export function AudioMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Audio> & RdfResourceCore> & Base {
  @namespace(as)
  class AudioClass extends DocumentMixin(Resource) implements Partial<Audio> {
  }
  return AudioClass
}

class AudioImpl extends AudioMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Audio>) {
    super(arg, init)
    this.types.add(as.Audio)
  }

  static readonly __mixins: Mixin[] = [AudioMixin, DocumentMixin];
}
AudioMixin.appliesTo = as.Audio
AudioMixin.Class = AudioImpl

export const fromPointer = createFactory<Audio>([DocumentMixin, AudioMixin], { types: [as.Audio] });
