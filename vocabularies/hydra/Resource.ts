import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '.';
import * as Rdfs from '@rdfine/rdfs';

export interface Resource extends Rdfs.Resource, RdfResource {
  apiDocumentation: Hydra.ApiDocumentation;
  collection: Array<Hydra.Collection>;
  first: Hydra.Resource;
  freetextQuery: string;
  last: Hydra.Resource;
  next: Hydra.Resource;
  operation: Array<Hydra.Operation>;
  previous: Hydra.Resource;
  search: Hydra.IriTemplate;
  view: Array<Hydra.Resource>;
}

export function ResourceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class ResourceClass extends Rdfs.ResourceMixin(Resource) implements Resource {
    @property.resource({ implicitTypes: [hydra.ApiDocumentation] })
    apiDocumentation!: Hydra.ApiDocumentation;
    @property.resource({ values: 'array', implicitTypes: [hydra.Collection] })
    collection!: Array<Hydra.Collection>;
    @property.resource({ as: [ResourceMixin] })
    first!: Hydra.Resource;
    @property.literal()
    freetextQuery!: string;
    @property.resource({ as: [ResourceMixin] })
    last!: Hydra.Resource;
    @property.resource({ as: [ResourceMixin] })
    next!: Hydra.Resource;
    @property.resource({ values: 'array', implicitTypes: [hydra.Operation] })
    operation!: Array<Hydra.Operation>;
    @property.resource({ as: [ResourceMixin] })
    previous!: Hydra.Resource;
    @property.resource({ implicitTypes: [hydra.IriTemplate] })
    search!: Hydra.IriTemplate;
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
