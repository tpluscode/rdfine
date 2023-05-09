import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { ParameterizableMixin } from './Parameterizable.js';

export interface ConstraintComponent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.Parameterizable<D>, rdfine.RdfResource<D> {
  nodeValidator: Sh.Validator<D> | undefined;
  propertyValidator: Sh.Validator<D> | undefined;
  validator: Sh.Validator<D> | undefined;
}

export function ConstraintComponentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ConstraintComponent> & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class ConstraintComponentClass extends ParameterizableMixin(Resource) implements Partial<ConstraintComponent> {
    @rdfine.property.resource({ implicitTypes: [sh.Validator] })
    nodeValidator: Sh.Validator | undefined;
    @rdfine.property.resource({ implicitTypes: [sh.Validator] })
    propertyValidator: Sh.Validator | undefined;
    @rdfine.property.resource({ implicitTypes: [sh.Validator] })
    validator: Sh.Validator | undefined;
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

export const fromPointer = createFactory<ConstraintComponent>([ParameterizableMixin, ConstraintComponentMixin], { types: [sh.ConstraintComponent] });
