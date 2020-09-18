import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import * as Rdfs from '@rdfine/rdfs';

export interface DeprecatedClass extends Rdfs.Class, RdfResource {
}

export function DeprecatedClassMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class DeprecatedClassClass extends Rdfs.ClassMixin(Resource) implements DeprecatedClass {
  }
  return DeprecatedClassClass
}

class DeprecatedClassImpl extends DeprecatedClassMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DeprecatedClass>) {
    super(arg, init)
    this.types.add(owl.DeprecatedClass)
  }

  static readonly __mixins: Mixin[] = [DeprecatedClassMixin, Rdfs.ClassMixin];
}
DeprecatedClassMixin.appliesTo = owl.DeprecatedClass
DeprecatedClassMixin.Class = DeprecatedClassImpl
