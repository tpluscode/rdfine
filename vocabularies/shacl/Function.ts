import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import ParameterizableMixin from './Parameterizable';
import RdfsClassMixin from '@rdfine/rdfs/Class';

export interface Function extends Sh.Parameterizable, RdfResource {
  returnType: Rdfs.Class;
}

export default function FunctionMixin<Base extends Constructor>(Resource: Base) {
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
}
FunctionMixin.shouldApply = (r: RdfResource) => r.types.has(sh.Function)
FunctionMixin.Class = FunctionImpl
