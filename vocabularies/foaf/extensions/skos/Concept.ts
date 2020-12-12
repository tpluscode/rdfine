import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { skos } from '@tpluscode/rdf-ns-builders';
import { foaf } from '../../lib/namespace';
import type * as Foaf from '../..';
import type * as Skos from '@rdfine/skos';

interface ConceptEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  focus: RDF.NamedNode | undefined;
}

declare module '@rdfine/skos/lib/Concept' {
  interface Concept<D extends RDF.DatasetCore> extends ConceptEx<D> {
  }
}

export function ConceptMixinEx<Base extends ExtendingConstructor<Skos.Concept, ConceptEx>>(Resource: Base): Constructor<ConceptEx & RdfResourceCore> & Base {
  @namespace(foaf)
  class Impl extends Resource implements ConceptEx {
    @property()
    focus: RDF.NamedNode | undefined;
  }
  return Impl
}
ConceptMixinEx.appliesTo = skos.Concept
