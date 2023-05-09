import '../extensions/rdfs/Resource.js';
import { ResourceMixinEx } from '../extensions/rdfs/Resource.js';
import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';
import type * as Rdf from '@rdfine/rdf';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface NegativePropertyAssertion<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
  assertionProperty: Rdf.Property<D> | undefined;
  sourceIndividual: RDF.NamedNode | undefined;
  targetIndividual: RDF.NamedNode | undefined;
  targetValue: string | undefined;
}

export function NegativePropertyAssertionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<NegativePropertyAssertion> & RdfResourceCore> & Base {
  @rdfine.namespace(owl)
  class NegativePropertyAssertionClass extends ResourceMixinEx(RdfsResourceMixin(Resource)) implements Partial<NegativePropertyAssertion> {
    @rdfine.property.resource({ as: [RdfPropertyMixin] })
    assertionProperty: Rdf.Property | undefined;
    @rdfine.property()
    sourceIndividual: RDF.NamedNode | undefined;
    @rdfine.property()
    targetIndividual: RDF.NamedNode | undefined;
    @rdfine.property.literal()
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
