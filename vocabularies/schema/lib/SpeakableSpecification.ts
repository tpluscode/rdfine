import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface SpeakableSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  cssSelector: string | undefined;
  xpath: string | undefined;
}

declare global {
  interface SchemaVocabulary {
    SpeakableSpecification: Factory<Schema.SpeakableSpecification>;
  }
}

export function SpeakableSpecificationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SpeakableSpecification & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SpeakableSpecificationClass extends IntangibleMixin(Resource) {
    @rdfine.property.literal()
    cssSelector: string | undefined;
    @rdfine.property.literal()
    xpath: string | undefined;
  }
  return SpeakableSpecificationClass as any
}
SpeakableSpecificationMixin.appliesTo = schema.SpeakableSpecification
SpeakableSpecificationMixin.createFactory = (env: RdfineEnvironment) => createFactory<SpeakableSpecification>([IntangibleMixin, SpeakableSpecificationMixin], { types: [schema.SpeakableSpecification] }, env)
