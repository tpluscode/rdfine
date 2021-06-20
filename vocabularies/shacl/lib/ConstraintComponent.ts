import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { ParameterizableMixin } from './Parameterizable';

export interface ConstraintComponent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.Parameterizable<D>, RdfResource<D> {
  nodeValidator: Sh.Validator<D> | undefined;
  propertyValidator: Sh.Validator<D> | undefined;
  validator: Sh.Validator<D> | undefined;
}

export function ConstraintComponentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ConstraintComponent> & RdfResourceCore> & Base {
  @namespace(sh)
  class ConstraintComponentClass extends ParameterizableMixin(Resource) implements Partial<ConstraintComponent> {
    @property.resource({ implicitTypes: [sh.Validator] })
    nodeValidator: Sh.Validator | undefined;
    @property.resource({ implicitTypes: [sh.Validator] })
    propertyValidator: Sh.Validator | undefined;
    @property.resource({ implicitTypes: [sh.Validator] })
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
