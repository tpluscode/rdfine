import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { MedicalIndicationMixin } from './MedicalIndication.js';

export interface ApprovedIndication<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalIndication<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    ApprovedIndication: Factory<Schema.ApprovedIndication>;
  }
}

export function ApprovedIndicationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ApprovedIndication & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ApprovedIndicationClass extends MedicalIndicationMixin(Resource) {
  }
  return ApprovedIndicationClass as any
}
ApprovedIndicationMixin.appliesTo = schema.ApprovedIndication
ApprovedIndicationMixin.createFactory = (env: RdfineEnvironment) => createFactory<ApprovedIndication>([MedicalIndicationMixin, ApprovedIndicationMixin], { types: [schema.ApprovedIndication] }, env)
