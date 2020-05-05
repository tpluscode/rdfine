import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { TechArticleMixin } from './TechArticle';

export interface APIReference extends Schema.TechArticle, RdfResource {
  assembly: string;
  assemblyVersion: string;
  executableLibraryName: string;
  programmingModel: string;
  targetPlatform: string;
}

export function APIReferenceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class APIReferenceClass extends TechArticleMixin(Resource) implements APIReference {
    @property.literal()
    assembly!: string;
    @property.literal()
    assemblyVersion!: string;
    @property.literal()
    executableLibraryName!: string;
    @property.literal()
    programmingModel!: string;
    @property.literal()
    targetPlatform!: string;
  }
  return APIReferenceClass
}

class APIReferenceImpl extends APIReferenceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<APIReference>) {
    super(arg, init)
    this.types.add(schema.APIReference)
  }

  static readonly __mixins: Mixin[] = [APIReferenceMixin, TechArticleMixin];
}
APIReferenceMixin.appliesTo = schema.APIReference
APIReferenceMixin.Class = APIReferenceImpl
