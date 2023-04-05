import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TechArticleMixin } from './TechArticle.js';

export interface APIReference<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TechArticle<D>, RdfResource<D> {
  assembly: string | undefined;
  assemblyVersion: string | undefined;
  executableLibraryName: string | undefined;
  programmingModel: string | undefined;
  targetPlatform: string | undefined;
}

export function APIReferenceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<APIReference> & RdfResourceCore> & Base {
  @namespace(schema)
  class APIReferenceClass extends TechArticleMixin(Resource) implements Partial<APIReference> {
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

export const fromPointer = createFactory<APIReference>([TechArticleMixin, APIReferenceMixin], { types: [schema.APIReference] });
