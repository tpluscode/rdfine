import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from '@tpluscode/rdf-ns-builders';
import { dash } from '../../lib/namespace';
import type * as Dash from '../..';
import type * as Owl from '@rdfine/owl';

interface OntologyEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  defaultLang: string | undefined;
}

declare module '@rdfine/owl/lib/Ontology' {
  interface Ontology<D extends RDF.DatasetCore> extends OntologyEx<D> {
  }
}

export function OntologyMixinEx<Base extends ExtendingConstructor<Owl.Ontology, OntologyEx>>(Resource: Base): Constructor<OntologyEx & RdfResourceCore> & Base {
  @namespace(dash)
  class Impl extends Resource implements OntologyEx {
    @property.literal()
    defaultLang: string | undefined;
  }
  return Impl
}
OntologyMixinEx.appliesTo = owl.Ontology
