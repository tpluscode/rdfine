import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Parameterizable<ID extends ResourceNode = ResourceNode> extends Rdfs.Resource<ID>, RdfResource<ID> {
  labelTemplate: string | undefined;
  parameter: Sh.Parameter<SiblingNode<ID>> | undefined;
}

export function ParameterizableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ParameterizableClass extends RdfsResourceMixin(Resource) implements Parameterizable {
    @property.literal()
    labelTemplate: string | undefined;
    @property.resource({ implicitTypes: [sh.Parameter] })
    parameter: Sh.Parameter | undefined;
  }
  return ParameterizableClass
}

class ParameterizableImpl extends ParameterizableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Parameterizable>) {
    super(arg, init)
    this.types.add(sh.Parameterizable)
  }

  static readonly __mixins: Mixin[] = [ParameterizableMixin, RdfsResourceMixin];
}
ParameterizableMixin.appliesTo = sh.Parameterizable
ParameterizableMixin.Class = ParameterizableImpl
