import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { TechArticleMixin } from './TechArticle';

export interface APIReference extends Schema.TechArticle, RdfResource {
  assembly: string | undefined;
  assemblyVersion: string | undefined;
  executableLibraryName: string | undefined;
  programmingModel: string | undefined;
  targetPlatform: string | undefined;
}

export function APIReferenceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class APIReferenceClass extends TechArticleMixin(Resource) implements APIReference {
    @property.literal()
    assembly: string | undefined;
    @property.literal()
    assemblyVersion: string | undefined;
    @property.literal()
    executableLibraryName: string | undefined;
    @property.literal()
    programmingModel: string | undefined;
    @property.literal()
    targetPlatform: string | undefined;
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
