import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Hydra from '.';
import type * as Rdfs from '@rdfine/rdfs';
import RdfsResourceMixin from '@rdfine/rdfs/Resource';
import ApiDocumentationMixin from './ApiDocumentation';
import CollectionMixin from './Collection';
import OperationMixin from './Operation';
import IriTemplateMixin from './IriTemplate';

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

export default function ResourceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class ResourceClass extends RdfsResourceMixin(Resource) implements Resource {
    @property.resource({ as: [ApiDocumentationMixin] })
    apiDocumentation!: Hydra.ApiDocumentation;
    @property.resource({ values: 'array', as: [CollectionMixin] })
    collection!: Array<Hydra.Collection>;
    @property.resource({ as: [ResourceMixin] })
    first!: Hydra.Resource;
    @property.literal()
    freetextQuery!: string;
    @property.resource({ as: [ResourceMixin] })
    last!: Hydra.Resource;
    @property.resource({ as: [ResourceMixin] })
    next!: Hydra.Resource;
    @property.resource({ values: 'array', as: [OperationMixin] })
    operation!: Array<Hydra.Operation>;
    @property.resource({ as: [ResourceMixin] })
    previous!: Hydra.Resource;
    @property.resource({ as: [IriTemplateMixin] })
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
}
ResourceMixin.shouldApply = (r: RdfResource) => r.types.has(hydra.Resource)
ResourceMixin.Class = ResourceImpl
