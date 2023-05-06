import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Parameterizable<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  labelTemplate: string | undefined;
  parameter: Sh.Parameter<D> | undefined;
}

export function ParameterizableMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Parameterizable> & RdfResourceCore> & Base {
  @namespace(sh)
  class ParameterizableClass extends RdfsResourceMixin(Resource) implements Partial<Parameterizable> {
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

export const fromPointer = createFactory<Parameterizable>([RdfsResourceMixin, ParameterizableMixin], { types: [sh.Parameterizable] });
