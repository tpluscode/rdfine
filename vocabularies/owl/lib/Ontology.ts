import { ResourceMixinEx } from '../extensions/rdfs';
import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Ontology<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  backwardCompatibleWith: Owl.Ontology<D> | undefined;
  imports: Owl.Ontology<D> | undefined;
  incompatibleWith: Owl.Ontology<D> | undefined;
  priorVersion: Owl.Ontology<D> | undefined;
  versionIRI: Owl.Ontology<D> | undefined;
}

export function OntologyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Ontology> & RdfResourceCore> & Base {
  @namespace(owl)
  class OntologyClass extends ResourceMixinEx(RdfsResourceMixin(Resource)) implements Partial<Ontology> {
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

export const fromPointer = createFactory<Ontology>([RdfsResourceMixin, OntologyMixin], { types: [owl.Ontology] });
