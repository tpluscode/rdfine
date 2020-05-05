import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import { ParameterizableMixin } from './Parameterizable';

export interface ConstraintComponent extends Sh.Parameterizable, RdfResource {
  nodeValidator: Sh.Validator;
  propertyValidator: Sh.Validator;
  validator: Sh.Validator;
}

export function ConstraintComponentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ConstraintComponentClass extends ParameterizableMixin(Resource) implements ConstraintComponent {
    @property.resource({ implicitTypes: [sh.Validator] })
    nodeValidator!: Sh.Validator;
    @property.resource({ implicitTypes: [sh.Validator] })
    propertyValidator!: Sh.Validator;
    @property.resource({ implicitTypes: [sh.Validator] })
    validator!: Sh.Validator;
  }
  return ConstraintComponentClass
}

class ConstraintComponentImpl extends ConstraintComponentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ConstraintComponent>) {
    super(arg, init)
    this.types.add(sh.ConstraintComponent)
  }

  static readonly __mixins: Mixin[] = [ConstraintComponentMixin, ParameterizableMixin];
}
ConstraintComponentMixin.appliesTo = sh.ConstraintComponent
ConstraintComponentMixin.Class = ConstraintComponentImpl
