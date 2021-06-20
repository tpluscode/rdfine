import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ParameterizableMixin } from './Parameterizable';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/lib/Class';

export interface Function<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.Parameterizable<D>, RdfResource<D> {
  returnType: Rdfs.Class<D> | undefined;
}

export function FunctionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Function> & RdfResourceCore> & Base {
  @namespace(sh)
  class FunctionClass extends ParameterizableMixin(Resource) implements Partial<Function> {
    @property.resource({ as: [RdfsClassMixin] })
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
