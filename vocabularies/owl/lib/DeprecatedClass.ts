import { ClassMixinEx } from '../extensions/rdfs';
import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/lib/Class';

export interface DeprecatedClass<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Class<D>, RdfResource<D> {
}

export function DeprecatedClassMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DeprecatedClass> & RdfResourceCore> & Base {
  @namespace(owl)
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
