import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface OntologyProperty<ID extends ResourceNode = ResourceNode> extends Rdf.Property<ID>, RdfResource<ID> {
}

export function OntologyPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class OntologyPropertyClass extends RdfPropertyMixin(Resource) implements OntologyProperty {
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
