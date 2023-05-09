import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin } from './Resource.js';

export interface ApiDocumentation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Hydra.Resource<D>, rdfine.RdfResource<D> {
  description: string | undefined;
  entrypoint: Hydra.Resource<D> | undefined;
  extension: RDF.Term | undefined;
  possibleStatus: Array<Hydra.Status<D>>;
  supportedClass: Array<Hydra.Class<D> | Rdfs.Class<D>>;
  title: string | undefined;
}

export function ApiDocumentationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ApiDocumentation> & RdfResourceCore> & Base {
  @rdfine.namespace(hydra)
  class ApiDocumentationClass extends ResourceMixin(Resource) implements Partial<ApiDocumentation> {
    @rdfine.property.literal()
    description: string | undefined;
    @rdfine.property.resource({ implicitTypes: [hydra.Resource] })
    entrypoint: Hydra.Resource | undefined;
    @rdfine.property()
    extension: RDF.Term | undefined;
    @rdfine.property.resource({ values: 'array', implicitTypes: [hydra.Status] })
    possibleStatus!: Array<Hydra.Status>;
    @rdfine.property.resource({ values: 'array' })
    supportedClass!: Array<Hydra.Class | Rdfs.Class>;
    @rdfine.property.literal()
    title: string | undefined;
  }
  return ApiDocumentationClass
}

class ApiDocumentationImpl extends ApiDocumentationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ApiDocumentation>) {
    super(arg, init)
    this.types.add(hydra.ApiDocumentation)
  }

  static readonly __mixins: Mixin[] = [ApiDocumentationMixin, ResourceMixin];
}
ApiDocumentationMixin.appliesTo = hydra.ApiDocumentation
ApiDocumentationMixin.Class = ApiDocumentationImpl

export const fromPointer = createFactory<ApiDocumentation>([ResourceMixin, ApiDocumentationMixin], { types: [hydra.ApiDocumentation] });
