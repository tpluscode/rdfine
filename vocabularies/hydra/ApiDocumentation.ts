import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '.';
import { ResourceMixin } from './Resource';

export interface ApiDocumentation extends Hydra.Resource, RdfResource {
  description: string;
  entrypoint: Hydra.Resource;
  possibleStatus: Array<Hydra.Status>;
  supportedClass: Array<Hydra.Class>;
  title: string;
}

export function ApiDocumentationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class ApiDocumentationClass extends ResourceMixin(Resource) implements ApiDocumentation {
    @property.literal()
    description!: string;
    @property.resource({ implicitTypes: [hydra.Resource] })
    entrypoint!: Hydra.Resource;
    @property.resource({ values: 'array', implicitTypes: [hydra.Status] })
    possibleStatus!: Array<Hydra.Status>;
    @property.resource({ values: 'array', implicitTypes: [hydra.Class] })
    supportedClass!: Array<Hydra.Class>;
    @property.literal()
    title!: string;
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
