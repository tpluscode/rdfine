import '../extensions/rdfs/Class.js';
import { ClassMixinEx } from '../extensions/rdfs/Class.js';
import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';
import type * as Rdf from '@rdfine/rdf';
import type * as Rdfs from '@rdfine/rdfs';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/lib/Class.js';
import { ListMixin as RdfListMixin } from '@rdfine/rdf/lib/List.js';

export interface Class<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Class<D>, RdfResource<D> {
  complementOf: Owl.Class<D> | undefined;
  disjointUnionOf: Rdf.List<D> | undefined;
  disjointWith: Owl.Class<D> | undefined;
  hasKey: Rdf.List<D> | undefined;
}

export function ClassMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Class> & RdfResourceCore> & Base {
  @namespace(owl)
  class ClassClass extends ClassMixinEx(RdfsClassMixin(Resource)) implements Partial<Class> {
    @property.resource({ as: [ClassMixin] })
    complementOf: Owl.Class | undefined;
    @property.resource({ as: [RdfListMixin] })
    disjointUnionOf: Rdf.List | undefined;
    @property.resource({ as: [ClassMixin] })
    disjointWith: Owl.Class | undefined;
    @property.resource({ as: [RdfListMixin] })
    hasKey: Rdf.List | undefined;
  }
  return ClassClass
}

class ClassImpl extends ClassMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Class>) {
    super(arg, init)
    this.types.add(owl.Class)
  }

  static readonly __mixins: Mixin[] = [ClassMixin, RdfsClassMixin];
}
ClassMixin.appliesTo = owl.Class
ClassMixin.Class = ClassImpl

export const fromPointer = createFactory<Class>([RdfsClassMixin, ClassMixin], { types: [owl.Class] });
