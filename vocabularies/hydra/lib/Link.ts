import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '../index.js';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';
import { ResourceMixin } from './Resource.js';

export interface Link<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdf.Property<D>, Hydra.Resource<D>, rdfine.RdfResource<D> {
  description: string | undefined;
  supportedOperation: Array<Hydra.Operation<D>>;
  title: string | undefined;
}

export function LinkMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Link & RdfResourceCore> & Base {
  @rdfine.namespace(hydra)
  class LinkClass extends ResourceMixin(RdfPropertyMixin(Resource)) {
    @rdfine.property.literal()
    description: string | undefined;
    @rdfine.property.resource({ values: 'array', implicitTypes: [hydra.Operation] })
    supportedOperation!: Array<Hydra.Operation>;
    @rdfine.property.literal()
    title: string | undefined;
  }
  return LinkClass as any
}

class LinkImpl extends LinkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Link>) {
    super(arg, init)
    this.types.add(hydra.Link)
  }

  static readonly __mixins: Mixin[] = [LinkMixin, RdfPropertyMixin, ResourceMixin];
}
LinkMixin.appliesTo = hydra.Link
LinkMixin.Class = LinkImpl

export const fromPointer = createFactory<Link>([ResourceMixin, RdfPropertyMixin, LinkMixin], { types: [hydra.Link] });
