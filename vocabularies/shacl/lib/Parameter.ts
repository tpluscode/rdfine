import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { PropertyShapeMixin } from './PropertyShape';

export interface Parameter<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.PropertyShape<D>, RdfResource<D> {
  optional: boolean | undefined;
}

export function ParameterMixin<Base extends Constructor>(Resource: Base): Constructor<Parameter> & Base {
  @namespace(sh)
  class ParameterClass extends PropertyShapeMixin(Resource) implements Parameter {
    @property.literal({ type: Boolean })
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
