import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Rdf from '@rdfine/rdf';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface NegativePropertyAssertion<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  assertionProperty: Rdf.Property<D> | undefined;
  sourceIndividual: RDF.NamedNode | undefined;
  targetIndividual: RDF.NamedNode | undefined;
  targetValue: string | undefined;
}

export function NegativePropertyAssertionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<NegativePropertyAssertion> & RdfResourceCore> & Base {
  @namespace(owl)
  class NegativePropertyAssertionClass extends RdfsResourceMixin(Resource) implements Partial<NegativePropertyAssertion> {
    @property.resource({ as: [RdfPropertyMixin] })
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

  static readonly __mixins: Mixin[] = [NegativePropertyAssertionMixin, RdfsResourceMixin];
}
NegativePropertyAssertionMixin.appliesTo = owl.NegativePropertyAssertion
NegativePropertyAssertionMixin.Class = NegativePropertyAssertionImpl

export const fromPointer = createFactory<NegativePropertyAssertion>([RdfsResourceMixin, NegativePropertyAssertionMixin], { types: [owl.NegativePropertyAssertion] });
