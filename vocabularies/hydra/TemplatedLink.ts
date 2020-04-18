import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Hydra from '.';
import type * as Rdf from '@rdfine/rdf';
import RdfPropertyMixin from '@rdfine/rdf/Property';
import ResourceMixin from './Resource';
import OperationMixin from './Operation';

export interface TemplatedLink extends Rdf.Property, Hydra.Resource, RdfResource {
  description: string;
  supportedOperation: Array<Hydra.Operation>;
  title: string;
}

export default function TemplatedLinkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class TemplatedLinkClass extends ResourceMixin(RdfPropertyMixin(Resource)) implements TemplatedLink {
    @property.literal()
    description!: string;
    @property.resource({ values: 'array', as: [OperationMixin] })
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
}
TemplatedLinkMixin.shouldApply = (r: RdfResource) => r.types.has(hydra.TemplatedLink)
TemplatedLinkMixin.Class = TemplatedLinkImpl
