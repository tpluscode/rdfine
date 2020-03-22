import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import TechArticleMixin from './TechArticle';

export interface APIReference extends Schema.TechArticle, RdfResource {
  assembly: string;
  assemblyVersion: string;
  executableLibraryName: string;
  programmingModel: string;
  targetPlatform: string;
}

export default function APIReferenceMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.APIReference)
  }
}
APIReferenceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.APIReference)
APIReferenceMixin.Class = APIReferenceImpl