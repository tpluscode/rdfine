import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import type * as Rdfs from '@rdfine/rdfs';
import RdfsResourceMixin from '@rdfine/rdfs/Resource';

export interface Ontology extends Rdfs.Resource, RdfResource {
  backwardCompatibleWith: Owl.Ontology;
  imports: Owl.Ontology;
  incompatibleWith: Owl.Ontology;
  priorVersion: Owl.Ontology;
  versionIRI: Owl.Ontology;
}

export default function OntologyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class OntologyClass extends RdfsResourceMixin(Resource) implements Ontology {
    @property.resource({ as: [OntologyMixin] })
    backwardCompatibleWith!: Owl.Ontology;
    @property.resource({ as: [OntologyMixin] })
    imports!: Owl.Ontology;
    @property.resource({ as: [OntologyMixin] })
    incompatibleWith!: Owl.Ontology;
    @property.resource({ as: [OntologyMixin] })
    priorVersion!: Owl.Ontology;
    @property.resource({ as: [OntologyMixin] })
    versionIRI!: Owl.Ontology;
  }
  return OntologyClass
}

class OntologyImpl extends OntologyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Ontology>) {
    super(arg, init)
    this.types.add(owl.Ontology)
  }
}
OntologyMixin.shouldApply = (r: RdfResource) => r.types.has(owl.Ontology)
OntologyMixin.Class = OntologyImpl
