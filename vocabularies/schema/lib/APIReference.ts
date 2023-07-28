import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TechArticleMixin } from './TechArticle.js';

export interface APIReference<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TechArticle<D>, rdfine.RdfResource<D> {
  assembly: string | undefined;
  assemblyVersion: string | undefined;
  executableLibraryName: string | undefined;
  programmingModel: string | undefined;
  targetPlatform: string | undefined;
}

export function APIReferenceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<APIReference & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class APIReferenceClass extends TechArticleMixin(Resource) {
    @rdfine.property.literal()
    assembly: string | undefined;
    @rdfine.property.literal()
    assemblyVersion: string | undefined;
    @rdfine.property.literal()
    executableLibraryName: string | undefined;
    @rdfine.property.literal()
    programmingModel: string | undefined;
    @rdfine.property.literal()
    targetPlatform: string | undefined;
  }
  return APIReferenceClass as any
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

export const fromPointer = createFactory<APIReference>([TechArticleMixin, APIReferenceMixin], { types: [schema.APIReference] });
