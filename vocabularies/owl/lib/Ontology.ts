import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Ontology<ID extends ResourceNode = ResourceNode> extends Rdfs.Resource<ID>, RdfResource<ID> {
  backwardCompatibleWith: Owl.Ontology<SiblingNode<ID>> | undefined;
  imports: Owl.Ontology<SiblingNode<ID>> | undefined;
  incompatibleWith: Owl.Ontology<SiblingNode<ID>> | undefined;
  priorVersion: Owl.Ontology<SiblingNode<ID>> | undefined;
  versionIRI: Owl.Ontology<SiblingNode<ID>> | undefined;
}

export function OntologyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class OntologyClass extends RdfsResourceMixin(Resource) implements Ontology {
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

  static readonly __mixins: Mixin[] = [OntologyMixin, RdfsResourceMixin];
}
OntologyMixin.appliesTo = owl.Ontology
OntologyMixin.Class = OntologyImpl
