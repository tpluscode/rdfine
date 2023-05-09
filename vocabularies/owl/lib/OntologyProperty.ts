import '../extensions/rdf/Property.js';
import { PropertyMixinEx } from '../extensions/rdf/Property.js';
import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface OntologyProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdf.Property<D>, rdfine.RdfResource<D> {
}

export function OntologyPropertyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<OntologyProperty> & RdfResourceCore> & Base {
  @rdfine.namespace(owl)
  class OntologyPropertyClass extends PropertyMixinEx(RdfPropertyMixin(Resource)) implements Partial<OntologyProperty> {
  }
  return OntologyPropertyClass
}

class OntologyPropertyImpl extends OntologyPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OntologyProperty>) {
    super(arg, init)
    this.types.add(owl.OntologyProperty)
  }

  static readonly __mixins: Mixin[] = [OntologyPropertyMixin, RdfPropertyMixin];
}
OntologyPropertyMixin.appliesTo = owl.OntologyProperty
OntologyPropertyMixin.Class = OntologyPropertyImpl

export const fromPointer = createFactory<OntologyProperty>([RdfPropertyMixin, OntologyPropertyMixin], { types: [owl.OntologyProperty] });
