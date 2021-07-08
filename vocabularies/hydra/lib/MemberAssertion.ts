import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface MemberAssertion<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  object: Hydra.Class<D> | undefined;
  property: Rdf.Property<D> | undefined;
  subject: Hydra.Resource<D> | undefined;
}

export function MemberAssertionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MemberAssertion> & RdfResourceCore> & Base {
  @namespace(hydra)
  class MemberAssertionClass extends Resource implements Partial<MemberAssertion> {
    @property.resource()
    object: Hydra.Class | undefined;
    @property.resource({ as: [RdfPropertyMixin] })
    property: Rdf.Property | undefined;
    @property.resource({ implicitTypes: [hydra.Resource] })
    subject: Hydra.Resource | undefined;
  }
  return MemberAssertionClass
}

class MemberAssertionImpl extends MemberAssertionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MemberAssertion>) {
    super(arg, init)
    this.types.add(hydra.MemberAssertion)
  }

  static readonly __mixins: Mixin[] = [MemberAssertionMixin];
}
MemberAssertionMixin.appliesTo = hydra.MemberAssertion
MemberAssertionMixin.Class = MemberAssertionImpl

export const fromPointer = createFactory<MemberAssertion>([MemberAssertionMixin], { types: [hydra.MemberAssertion] });
