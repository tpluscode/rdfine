import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebPageMixin } from './WebPage.js';

export interface MedicalWebPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, rdfine.RdfResource<D> {
  aspect: string | undefined;
  medicalAudience: Schema.MedicalAudience<D> | undefined;
}

export function MedicalWebPageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MedicalWebPage & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalWebPageClass extends WebPageMixin(Resource) {
    @rdfine.property.literal()
    aspect: string | undefined;
    @rdfine.property.resource()
    medicalAudience: Schema.MedicalAudience | undefined;
  }
  return MedicalWebPageClass as any
}

class MedicalWebPageImpl extends MedicalWebPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalWebPage>) {
    super(arg, init)
    this.types.add(schema.MedicalWebPage)
  }

  static readonly __mixins: Mixin[] = [MedicalWebPageMixin, WebPageMixin];
}
MedicalWebPageMixin.appliesTo = schema.MedicalWebPage
MedicalWebPageMixin.Class = MedicalWebPageImpl

export const fromPointer = createFactory<MedicalWebPage>([WebPageMixin, MedicalWebPageMixin], { types: [schema.MedicalWebPage] });
