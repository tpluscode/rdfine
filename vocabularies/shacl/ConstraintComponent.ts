import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import ParameterizableMixin from './Parameterizable';
import ValidatorMixin from './Validator';

export interface ConstraintComponent extends Sh.Parameterizable, RdfResource {
  nodeValidator: Sh.Validator;
  propertyValidator: Sh.Validator;
  validator: Sh.Validator;
}

export default function ConstraintComponentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ConstraintComponentClass extends ParameterizableMixin(Resource) implements ConstraintComponent {
    @property.resource({ as: [ValidatorMixin] })
    nodeValidator!: Sh.Validator;
    @property.resource({ as: [ValidatorMixin] })
    propertyValidator!: Sh.Validator;
    @property.resource({ as: [ValidatorMixin] })
    validator!: Sh.Validator;
  }
  return ConstraintComponentClass
}

class ConstraintComponentImpl extends ConstraintComponentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ConstraintComponent>) {
    super(arg, init)
    this.types.add(sh.ConstraintComponent)
  }
}
ConstraintComponentMixin.shouldApply = (r: RdfResource) => r.types.has(sh.ConstraintComponent)
ConstraintComponentMixin.Class = ConstraintComponentImpl
