import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/Class';
import { ParameterizableMixin } from './Parameterizable';

export interface Function extends Sh.Parameterizable, RdfResource {
  returnType: Rdfs.Class;
}

export function FunctionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class FunctionClass extends ParameterizableMixin(Resource) implements Function {
    @property.resource({ as: [RdfsClassMixin] })
    returnType!: Rdfs.Class;
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
