import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import type * as Rdfs from '@rdfine/rdfs';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/Class';

export interface DeprecatedClass extends Rdfs.Class, RdfResource {
}

export function DeprecatedClassMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class DeprecatedClassClass extends RdfsClassMixin(Resource) implements DeprecatedClass {
  }
  return DeprecatedClassClass
}

class DeprecatedClassImpl extends DeprecatedClassMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DeprecatedClass>) {
    super(arg, init)
    this.types.add(owl.DeprecatedClass)
  }

  static readonly __mixins: Mixin[] = [DeprecatedClassMixin, RdfsClassMixin];
}
DeprecatedClassMixin.appliesTo = owl.DeprecatedClass
DeprecatedClassMixin.Class = DeprecatedClassImpl
