import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '.';
import * as Rdfs from '@rdfine/rdfs';

export interface Resource<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  apiDocumentation: Hydra.ApiDocumentation<D> | undefined;
  collection: Array<Hydra.Collection<Hydra.Resource<D>, D>>;
  first: Hydra.Resource<D> | undefined;
  freetextQuery: string | undefined;
  last: Hydra.Resource<D> | undefined;
  next: Hydra.Resource<D> | undefined;
  operation: Array<Hydra.Operation<D>>;
  previous: Hydra.Resource<D> | undefined;
  search: Hydra.IriTemplate<D> | undefined;
  view: Array<Hydra.Resource<D>>;
}

export function ResourceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class ResourceClass extends Rdfs.ResourceMixin(Resource) implements Resource {
    @property.resource({ implicitTypes: [hydra.ApiDocumentation] })
    apiDocumentation: Hydra.ApiDocumentation | undefined;
    @property.resource({ values: 'array', implicitTypes: [hydra.Collection] })
    collection!: Array<Hydra.Collection<any, any>>;
    @property.resource({ as: [ResourceMixin] })
    first: Hydra.Resource | undefined;
    @property.literal()
    freetextQuery: string | undefined;
    @property.resource({ as: [ResourceMixin] })
    last: Hydra.Resource | undefined;
    @property.resource({ as: [ResourceMixin] })
    next: Hydra.Resource | undefined;
    @property.resource({ values: 'array', implicitTypes: [hydra.Operation] })
    operation!: Array<Hydra.Operation>;
    @property.resource({ as: [ResourceMixin] })
    previous: Hydra.Resource | undefined;
    @property.resource({ implicitTypes: [hydra.IriTemplate] })
    search: Hydra.IriTemplate | undefined;
    @property.resource({ values: 'array', as: [ResourceMixin] })
    view!: Array<Hydra.Resource>;
  }
  return ResourceClass
}

class ResourceImpl extends ResourceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Resource>) {
    super(arg, init)
    this.types.add(hydra.Resource)
  }

  static readonly __mixins: Mixin[] = [ResourceMixin, Rdfs.ResourceMixin];
}
ResourceMixin.appliesTo = hydra.Resource
ResourceMixin.Class = ResourceImpl
