import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { skos } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Skos from '../index.js';

export interface Collection<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  member: Array<Skos.Collection<D> | Skos.Concept<D>>;
}

declare global {
  interface SkosVocabulary {
    Collection: Factory<Skos.Collection>;
  }
}

export function CollectionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Collection & RdfResourceCore> & Base {
  @rdfine.namespace(skos)
  class CollectionClass extends Resource {
    @rdfine.property.resource({ values: 'array' })
    member!: Array<Skos.Collection | Skos.Concept>;
  }
  return CollectionClass as any
}
CollectionMixin.appliesTo = skos.Collection
CollectionMixin.createFactory = (env: RdfineEnvironment) => createFactory<Collection>([CollectionMixin], { types: [skos.Collection] }, env)
