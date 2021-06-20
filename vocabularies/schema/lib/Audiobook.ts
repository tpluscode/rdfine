import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AudioObjectMixin } from './AudioObject';
import { BookMixin } from './Book';

export interface Audiobook<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AudioObject<D>, Schema.Book<D>, RdfResource<D> {
  duration: Schema.Duration<D> | undefined;
  readBy: Schema.Person<D> | undefined;
}

export function AudiobookMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Audiobook> & RdfResourceCore> & Base {
  @namespace(schema)
  class AudiobookClass extends BookMixin(AudioObjectMixin(Resource)) implements Partial<Audiobook> {
    @property.resource()
    duration: Schema.Duration | undefined;
    @property.resource()
    readBy: Schema.Person | undefined;
  }
  return AudiobookClass
}

class AudiobookImpl extends AudiobookMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Audiobook>) {
    super(arg, init)
    this.types.add(schema.Audiobook)
  }

  static readonly __mixins: Mixin[] = [AudiobookMixin, AudioObjectMixin, BookMixin];
}
AudiobookMixin.appliesTo = schema.Audiobook
AudiobookMixin.Class = AudiobookImpl

export const fromPointer = createFactory<Audiobook>([BookMixin, AudioObjectMixin, AudiobookMixin], { types: [schema.Audiobook] });
