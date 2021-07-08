import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import type * as Rdf from '@rdfine/rdf';
import { ResourceMixin } from './Resource';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface Link<D extends RDF.DatasetCore = RDF.DatasetCore> extends Hydra.Resource<D>, Rdf.Property<D>, RdfResource<D> {
  description: string | undefined;
  supportedOperation: Array<Hydra.Operation<D>>;
  title: string | undefined;
}

export function LinkMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Link> & RdfResourceCore> & Base {
  @namespace(hydra)
  class LinkClass extends RdfPropertyMixin(ResourceMixin(Resource)) implements Partial<Link> {
    @property.literal()
    description: string | undefined;
    @property.resource({ values: 'array', implicitTypes: [hydra.Operation] })
    supportedOperation!: Array<Hydra.Operation>;
    @property.literal()
    title: string | undefined;
  }
  return LinkClass
}

class LinkImpl extends LinkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Link>) {
    super(arg, init)
    this.types.add(hydra.Link)
  }

  static readonly __mixins: Mixin[] = [LinkMixin, ResourceMixin, RdfPropertyMixin];
}
LinkMixin.appliesTo = hydra.Link
LinkMixin.Class = LinkImpl

export const fromPointer = createFactory<Link>([RdfPropertyMixin, ResourceMixin, LinkMixin], { types: [hydra.Link] });
