import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AudioObjectMixin } from './AudioObject';
import { BookMixin } from './Book';

export interface Audiobook<ID extends ResourceNode = ResourceNode> extends Schema.AudioObject<ID>, Schema.Book<ID>, RdfResource<ID> {
  duration: Schema.Duration<SiblingNode<ID>> | undefined;
  readBy: Schema.Person<SiblingNode<ID>> | undefined;
}

export function AudiobookMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AudiobookClass extends BookMixin(AudioObjectMixin(Resource)) implements Audiobook {
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
