import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';
import { ResourceMixin } from './Resource';

export interface TemplatedLink<ID extends ResourceNode = ResourceNode> extends Rdf.Property<ID>, Hydra.Resource<ID>, RdfResource<ID> {
  description: string | undefined;
  supportedOperation: Array<Hydra.Operation<SiblingNode<ID>>>;
  title: string | undefined;
}

export function TemplatedLinkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class TemplatedLinkClass extends ResourceMixin(RdfPropertyMixin(Resource)) implements TemplatedLink {
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

  static readonly __mixins: Mixin[] = [TemplatedLinkMixin, RdfPropertyMixin, ResourceMixin];
}
TemplatedLinkMixin.appliesTo = hydra.TemplatedLink
TemplatedLinkMixin.Class = TemplatedLinkImpl
