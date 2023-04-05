import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from '@tpluscode/rdf-ns-builders';
import { sh } from '../../lib/namespace.js';
import type * as Sh from '../../index.js';
import type * as Owl from '@rdfine/owl.js';
import type * as Rdfs from '@rdfine/rdfs.js';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource.js';
import { OntologyMixin as OwlOntologyMixin } from '@rdfine/owl/lib/Ontology.js';

interface OntologyEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  declare: Sh.PrefixDeclaration<D> | undefined;
  entailment: Rdfs.Resource<D> | undefined;
  shapesGraph: Owl.Ontology<D> | undefined;
  suggestedShapesGraph: Owl.Ontology<D> | undefined;
}

declare module '@rdfine/owl/lib/Ontology' {
  interface Ontology<D extends RDF.DatasetCore> extends OntologyEx<D> {
  }
}

export function OntologyMixinEx<Base extends ExtendingConstructor<Owl.Ontology, OntologyEx>>(Resource: Base): Constructor<OntologyEx & RdfResourceCore> & Base {
  @namespace(sh)
  class Impl extends Resource implements OntologyEx {
    @property.resource({ implicitTypes: [sh.PrefixDeclaration] })
    declare: Sh.PrefixDeclaration | undefined;
    @property.resource({ as: [RdfsResourceMixin] })
    entailment: Rdfs.Resource | undefined;
    @property.resource({ as: [OwlOntologyMixin] })
    shapesGraph: Owl.Ontology | undefined;
    @property.resource({ as: [OwlOntologyMixin] })
    suggestedShapesGraph: Owl.Ontology | undefined;
  }
  return Impl
}
OntologyMixinEx.appliesTo = owl.Ontology
