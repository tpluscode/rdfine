import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ParameterizableMixin } from './Parameterizable';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/lib/Class';

export interface Function<ID extends ResourceNode = ResourceNode> extends Sh.Parameterizable<ID>, RdfResource<ID> {
  returnType: Rdfs.Class<SiblingNode<ID>> | undefined;
}

export function FunctionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class FunctionClass extends ParameterizableMixin(Resource) implements Function {
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
