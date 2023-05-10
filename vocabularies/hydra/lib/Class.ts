import '../extensions/rdfs/Class.js';
import { ClassMixinEx } from '../extensions/rdfs/Class.js';
import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/lib/Class';

export interface Class<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Class<D>, rdfine.RdfResource<D> {
  description: string | undefined;
  supportedOperation: Array<Hydra.Operation<D>>;
  title: string | undefined;
}

export function ClassMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Class> & RdfResourceCore> & Base {
  @rdfine.namespace(hydra)
  class ClassClass extends ClassMixinEx(RdfsClassMixin(Resource)) implements Partial<Class> {
    @rdfine.property.literal()
    description: string | undefined;
    @rdfine.property.resource({ values: 'array', implicitTypes: [hydra.Operation] })
    supportedOperation!: Array<Hydra.Operation>;
    @rdfine.property.literal()
    title: string | undefined;
  }
  return ClassClass
}

class ClassImpl extends ClassMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Class>) {
    super(arg, init)
    this.types.add(hydra.Class)
  }

  static readonly __mixins: Mixin[] = [ClassMixin, RdfsClassMixin];
}
ClassMixin.appliesTo = hydra.Class
ClassMixin.Class = ClassImpl

export const fromPointer = createFactory<Class>([RdfsClassMixin, ClassMixin], { types: [hydra.Class] });
