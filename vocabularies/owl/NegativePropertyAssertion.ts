import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import * as Rdfs from '@rdfine/rdfs';
import * as Rdf from '@rdfine/rdf';

export interface NegativePropertyAssertion<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  assertionProperty: Rdf.Property<D> | undefined;
  sourceIndividual: RDF.NamedNode | undefined;
  targetIndividual: RDF.NamedNode | undefined;
  targetValue: string | undefined;
}

export function NegativePropertyAssertionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class NegativePropertyAssertionClass extends Rdfs.ResourceMixin(Resource) implements NegativePropertyAssertion {
    @property.resource({ as: [Rdf.PropertyMixin] })
    assertionProperty: Rdf.Property | undefined;
    @property()
    sourceIndividual: RDF.NamedNode | undefined;
    @property()
    targetIndividual: RDF.NamedNode | undefined;
    @property.literal()
    targetValue: string | undefined;
  }
  return NegativePropertyAssertionClass
}

class NegativePropertyAssertionImpl extends NegativePropertyAssertionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NegativePropertyAssertion>) {
    super(arg, init)
    this.types.add(owl.NegativePropertyAssertion)
  }

  static readonly __mixins: Mixin[] = [NegativePropertyAssertionMixin, Rdfs.ResourceMixin];
}
NegativePropertyAssertionMixin.appliesTo = owl.NegativePropertyAssertion
NegativePropertyAssertionMixin.Class = NegativePropertyAssertionImpl
