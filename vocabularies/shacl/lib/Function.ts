import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ParameterizableMixin } from './Parameterizable.js';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/lib/Class';

export interface Function<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.Parameterizable<D>, rdfine.RdfResource<D> {
  returnType: Rdfs.Class<D> | undefined;
}

export function FunctionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Function> & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class FunctionClass extends ParameterizableMixin(Resource) implements Partial<Function> {
    @rdfine.property.resource({ as: [RdfsClassMixin] })
    returnType: Rdfs.Class | undefined;
  }
  return FunctionClass
}

class FunctionImpl extends FunctionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Function>) {
    super(arg, init)
    this.types.add(sh.Function)
  }

  static readonly __mixins: Mixin[] = [FunctionMixin, ParameterizableMixin];
}
FunctionMixin.appliesTo = sh.Function
FunctionMixin.Class = FunctionImpl

export const fromPointer = createFactory<Function>([ParameterizableMixin, FunctionMixin], { types: [sh.Function] });
