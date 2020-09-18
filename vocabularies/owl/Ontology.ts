import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import * as Rdfs from '@rdfine/rdfs';

export interface Ontology extends Rdfs.Resource, RdfResource {
  backwardCompatibleWith: Owl.Ontology | undefined;
  imports: Owl.Ontology | undefined;
  incompatibleWith: Owl.Ontology | undefined;
  priorVersion: Owl.Ontology | undefined;
  versionIRI: Owl.Ontology | undefined;
}

export function OntologyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class OntologyClass extends Rdfs.ResourceMixin(Resource) implements Ontology {
    @property.resource({ as: [OntologyMixin] })
    backwardCompatibleWith: Owl.Ontology | undefined;
    @property.resource({ as: [OntologyMixin] })
    imports: Owl.Ontology | undefined;
    @property.resource({ as: [OntologyMixin] })
    incompatibleWith: Owl.Ontology | undefined;
    @property.resource({ as: [OntologyMixin] })
    priorVersion: Owl.Ontology | undefined;
    @property.resource({ as: [OntologyMixin] })
    versionIRI: Owl.Ontology | undefined;
  }
  return OntologyClass
}

class OntologyImpl extends OntologyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Ontology>) {
    super(arg, init)
    this.types.add(owl.Ontology)
  }

  static readonly __mixins: Mixin[] = [OntologyMixin, Rdfs.ResourceMixin];
}
OntologyMixin.appliesTo = owl.Ontology
OntologyMixin.Class = OntologyImpl
