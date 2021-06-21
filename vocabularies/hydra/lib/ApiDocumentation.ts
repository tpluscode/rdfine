import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import { ResourceMixin } from './Resource';

export interface ApiDocumentation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Hydra.Resource<D>, RdfResource<D> {
  description: string | undefined;
  entrypoint: Hydra.Resource<D> | undefined;
  possibleStatus: Array<Hydra.Status<D>>;
  supportedClass: Array<Hydra.Class<D>>;
  title: string | undefined;
}

export function ApiDocumentationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ApiDocumentation> & RdfResourceCore> & Base {
  @namespace(hydra)
  class ApiDocumentationClass extends ResourceMixin(Resource) implements Partial<ApiDocumentation> {
    @property.literal()
    description: string | undefined;
    @property.resource({ implicitTypes: [hydra.Resource] })
    entrypoint: Hydra.Resource | undefined;
    @property.resource({ values: 'array', implicitTypes: [hydra.Status] })
    possibleStatus!: Array<Hydra.Status>;
    @property.resource({ values: 'array', implicitTypes: [hydra.Class] })
    supportedClass!: Array<Hydra.Class>;
    @property.literal()
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
