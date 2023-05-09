import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { PropertyShapeMixin } from './PropertyShape.js';

export interface Parameter<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.PropertyShape<D>, rdfine.RdfResource<D> {
  optional: boolean | undefined;
}

export function ParameterMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Parameter> & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class ParameterClass extends PropertyShapeMixin(Resource) implements Partial<Parameter> {
    @rdfine.property.literal({ type: Boolean })
    optional: boolean | undefined;
  }
  return ParameterClass
}

class ParameterImpl extends ParameterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Parameter>) {
    super(arg, init)
    this.types.add(sh.Parameter)
  }

  static readonly __mixins: Mixin[] = [ParameterMixin, PropertyShapeMixin];
}
ParameterMixin.appliesTo = sh.Parameter
ParameterMixin.Class = ParameterImpl

export const fromPointer = createFactory<Parameter>([PropertyShapeMixin, ParameterMixin], { types: [sh.Parameter] });
