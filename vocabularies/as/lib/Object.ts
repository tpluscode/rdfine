import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';

export interface Object<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  attachment: As.Link<D> | As.Object<D> | undefined;
  attachments: As.Link<D> | As.Object<D> | undefined;
  attributedTo: As.Link<D> | As.Object<D> | undefined;
  audience: As.Link<D> | As.Object<D> | undefined;
  author: As.Link<D> | As.Object<D> | undefined;
  bcc: As.Link<D> | As.Object<D> | undefined;
  bto: As.Link<D> | As.Object<D> | undefined;
  cc: As.Link<D> | As.Object<D> | undefined;
  content: string | undefined;
  context: As.Link<D> | As.Object<D> | undefined;
  downstreamDuplicates: string | undefined;
  duration: string | undefined;
  endTime: Date | undefined;
  generator: As.Link<D> | As.Object<D> | undefined;
  icon: As.Image<D> | As.Link<D> | undefined;
  image: As.Image<D> | As.Link<D> | undefined;
  inReplyTo: As.Link<D> | As.Object<D> | undefined;
  location: As.Link<D> | As.Object<D> | undefined;
  mediaType: string | undefined;
  name: string | undefined;
  objectType: string | undefined;
  preview: As.Link<D> | As.Object<D> | undefined;
  provider: As.Link<D> | As.Object<D> | undefined;
  published: Date | undefined;
  rating: number | undefined;
  replies: As.Collection<D> | undefined;
  startTime: Date | undefined;
  summary: string | undefined;
  tag: As.Link<D> | As.Object<D> | undefined;
  tags: As.Link<D> | As.Object<D> | undefined;
  to: As.Link<D> | As.Object<D> | undefined;
  updated: Date | undefined;
  upstreamDuplicates: string | undefined;
  url: As.Link<D> | undefined;
}

export function ObjectMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Object> & RdfResourceCore> & Base {
  @namespace(as)
  class ObjectClass extends Resource implements Partial<Object> {
    @property.resource()
    attachment: As.Link | As.Object | undefined;
    @property.resource()
    attachments: As.Link | As.Object | undefined;
    @property.resource()
    attributedTo: As.Link | As.Object | undefined;
    @property.resource()
    audience: As.Link | As.Object | undefined;
    @property.resource()
    author: As.Link | As.Object | undefined;
    @property.resource()
    bcc: As.Link | As.Object | undefined;
    @property.resource()
    bto: As.Link | As.Object | undefined;
    @property.resource()
    cc: As.Link | As.Object | undefined;
    @property.literal({ datatype: $rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#langString') })
    content: string | undefined;
    @property.resource()
    context: As.Link | As.Object | undefined;
    @property.literal()
    downstreamDuplicates: string | undefined;
    @property.literal({ datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#duration') })
    duration: string | undefined;
    @property.literal({ type: Date })
    endTime: Date | undefined;
    @property.resource()
    generator: As.Link | As.Object | undefined;
    @property.resource()
    icon: As.Image | As.Link | undefined;
    @property.resource()
    image: As.Image | As.Link | undefined;
    @property.resource()
    inReplyTo: As.Link | As.Object | undefined;
    @property.resource()
    location: As.Link | As.Object | undefined;
    @property.literal()
    mediaType: string | undefined;
    @property.literal({ datatype: $rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#langString') })
    name: string | undefined;
    @property.literal()
    objectType: string | undefined;
    @property.resource()
    preview: As.Link | As.Object | undefined;
    @property.resource()
    provider: As.Link | As.Object | undefined;
    @property.literal({ type: Date })
    published: Date | undefined;
    @property.literal({ type: Number })
    rating: number | undefined;
    @property.resource({ implicitTypes: [as.Collection] })
    replies: As.Collection | undefined;
    @property.literal({ type: Date })
    startTime: Date | undefined;
    @property.literal({ datatype: $rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#langString') })
    summary: string | undefined;
    @property.resource()
    tag: As.Link | As.Object | undefined;
    @property.resource()
    tags: As.Link | As.Object | undefined;
    @property.resource()
    to: As.Link | As.Object | undefined;
    @property.literal({ type: Date })
    updated: Date | undefined;
    @property.literal()
    upstreamDuplicates: string | undefined;
    @property.resource({ implicitTypes: [as.Link] })
    url: As.Link | undefined;
  }
  return ObjectClass
}

class ObjectImpl extends ObjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Object>) {
    super(arg, init)
    this.types.add(as.Object)
  }

  static readonly __mixins: Mixin[] = [ObjectMixin];
}
ObjectMixin.appliesTo = as.Object
ObjectMixin.Class = ObjectImpl

export const fromPointer = createFactory<Object>([ObjectMixin], { types: [as.Object] });
