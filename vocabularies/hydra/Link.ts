import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '.';
import * as Rdf from '@rdfine/rdf';
import { ResourceMixin } from './Resource';

export interface Link extends Rdf.Property, Hydra.Resource, RdfResource {
  description: string | undefined;
  supportedOperation: Array<Hydra.Operation>;
  title: string | undefined;
}

export function LinkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class LinkClass extends ResourceMixin(Rdf.PropertyMixin(Resource)) implements Link {
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

  static readonly __mixins: Mixin[] = [LinkMixin, Rdf.PropertyMixin, ResourceMixin];
}
LinkMixin.appliesTo = hydra.Link
LinkMixin.Class = LinkImpl
