import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/Resource';

export interface Parameterizable extends Rdfs.Resource, RdfResource {
  labelTemplate: RDF.Term;
  parameter: Sh.Parameter;
}

export function ParameterizableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ParameterizableClass extends RdfsResourceMixin(Resource) implements Parameterizable {
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
}
ParameterizableMixin.shouldApply = (r: RdfResource) => r.types.has(sh.Parameterizable)
ParameterizableMixin.Class = ParameterizableImpl
