import '../extensions/rdfs/Class.js';
import { ClassMixinEx } from '../extensions/rdfs/Class.js';
import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/lib/Class';

export interface DeprecatedClass<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Class<D>, rdfine.RdfResource<D> {
}

export function DeprecatedClassMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<DeprecatedClass> & RdfResourceCore> & Base {
  @rdfine.namespace(owl)
  class DeprecatedClassClass extends ClassMixinEx(RdfsClassMixin(Resource)) implements Partial<DeprecatedClass> {
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

export const fromPointer = createFactory<DeprecatedClass>([RdfsClassMixin, DeprecatedClassMixin], { types: [owl.DeprecatedClass] });
