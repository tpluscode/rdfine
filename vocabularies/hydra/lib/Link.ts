import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';
import { ResourceMixin } from './Resource';

export interface Link<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdf.Property<D>, Hydra.Resource<D>, RdfResource<D> {
  description: string | undefined;
  supportedOperation: Array<Hydra.Operation<D>>;
  title: string | undefined;
}

export function LinkMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Link> & RdfResourceCore> & Base {
  @namespace(hydra)
  class LinkClass extends ResourceMixin(RdfPropertyMixin(Resource)) implements Partial<Link> {
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

  static readonly __mixins: Mixin[] = [LinkMixin, RdfPropertyMixin, ResourceMixin];
}
LinkMixin.appliesTo = hydra.Link
LinkMixin.Class = LinkImpl

export const fromPointer = createFactory<Link>([ResourceMixin, RdfPropertyMixin, LinkMixin], { types: [hydra.Link] });
