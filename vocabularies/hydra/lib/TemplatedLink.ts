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

export interface TemplatedLink<D extends RDF.DatasetCore = RDF.DatasetCore> extends Hydra.Resource<D>, Rdf.Property<D>, RdfResource<D> {
  description: string | undefined;
  supportedOperation: Array<Hydra.Operation<D>>;
  title: string | undefined;
}

export function TemplatedLinkMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TemplatedLink> & RdfResourceCore> & Base {
  @namespace(hydra)
  class TemplatedLinkClass extends RdfPropertyMixin(ResourceMixin(Resource)) implements Partial<TemplatedLink> {
    @property.literal()
    description: string | undefined;
    @property.resource({ values: 'array', implicitTypes: [hydra.Operation] })
    supportedOperation!: Array<Hydra.Operation>;
    @property.literal()
    title: string | undefined;
  }
  return TemplatedLinkClass
}

class TemplatedLinkImpl extends TemplatedLinkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TemplatedLink>) {
    super(arg, init)
    this.types.add(hydra.TemplatedLink)
  }

  static readonly __mixins: Mixin[] = [TemplatedLinkMixin, ResourceMixin, RdfPropertyMixin];
}
TemplatedLinkMixin.appliesTo = hydra.TemplatedLink
TemplatedLinkMixin.Class = TemplatedLinkImpl

export const fromPointer = createFactory<TemplatedLink>([RdfPropertyMixin, ResourceMixin, TemplatedLinkMixin], { types: [hydra.TemplatedLink] });
