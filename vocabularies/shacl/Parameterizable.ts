import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import * as Rdfs from '@rdfine/rdfs';

export interface Parameterizable extends Rdfs.Resource, RdfResource {
  labelTemplate: RDF.Term;
  parameter: Sh.Parameter;
}

export function ParameterizableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ParameterizableClass extends Rdfs.ResourceMixin(Resource) implements Parameterizable {
    @property()
    labelTemplate!: RDF.Term;
    @property.resource({ implicitTypes: [sh.Parameter] })
    parameter!: Sh.Parameter;
  }
  return ParameterizableClass
}

class ParameterizableImpl extends ParameterizableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Parameterizable>) {
    super(arg, init)
    this.types.add(sh.Parameterizable)
  }

  static readonly __mixins: Mixin[] = [ParameterizableMixin, Rdfs.ResourceMixin];
}
ParameterizableMixin.appliesTo = sh.Parameterizable
ParameterizableMixin.Class = ParameterizableImpl
