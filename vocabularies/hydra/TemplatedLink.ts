import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '.';
import * as Rdf from '@rdfine/rdf';
import { ResourceMixin } from './Resource';

export interface TemplatedLink extends Rdf.Property, Hydra.Resource, RdfResource {
  description: string;
  supportedOperation: Array<Hydra.Operation>;
  title: string;
}

export function TemplatedLinkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class TemplatedLinkClass extends ResourceMixin(Rdf.PropertyMixin(Resource)) implements TemplatedLink {
    @property.literal()
    description!: string;
    @property.resource({ values: 'array', implicitTypes: [hydra.Operation] })
    supportedOperation!: Array<Hydra.Operation>;
    @property.literal()
    title!: string;
  }
  return TemplatedLinkClass
}

class TemplatedLinkImpl extends TemplatedLinkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TemplatedLink>) {
    super(arg, init)
    this.types.add(hydra.TemplatedLink)
  }

  static readonly __mixins: Mixin[] = [TemplatedLinkMixin, Rdf.PropertyMixin, ResourceMixin];
}
TemplatedLinkMixin.appliesTo = hydra.TemplatedLink
TemplatedLinkMixin.Class = TemplatedLinkImpl
