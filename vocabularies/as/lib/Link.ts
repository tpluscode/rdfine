import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';

export interface Link<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  attributedTo: As.Link<D> | As.Object<D> | undefined;
  height: number | undefined;
  href: string | undefined;
  hreflang: string | undefined;
  mediaType: string | undefined;
  name: string | undefined;
  preview: As.Link<D> | As.Object<D> | undefined;
  rel: string | undefined;
  width: number | undefined;
}

export function LinkMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Link> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class LinkClass extends Resource implements Partial<Link> {
    @rdfine.property.resource()
    attributedTo: As.Link | As.Object | undefined;
    @rdfine.property.literal({ type: Number })
    height: number | undefined;
    @rdfine.property.literal()
    href: string | undefined;
    @rdfine.property.literal()
    hreflang: string | undefined;
    @rdfine.property.literal()
    mediaType: string | undefined;
    @rdfine.property.literal({ datatype: $rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#langString') })
    name: string | undefined;
    @rdfine.property.resource()
    preview: As.Link | As.Object | undefined;
    @rdfine.property.literal()
    rel: string | undefined;
    @rdfine.property.literal({ type: Number })
    width: number | undefined;
  }
  return LinkClass
}

class LinkImpl extends LinkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Link>) {
    super(arg, init)
    this.types.add(as.Link)
  }

  static readonly __mixins: Mixin[] = [LinkMixin];
}
LinkMixin.appliesTo = as.Link
LinkMixin.Class = LinkImpl

export const fromPointer = createFactory<Link>([LinkMixin], { types: [as.Link] });
