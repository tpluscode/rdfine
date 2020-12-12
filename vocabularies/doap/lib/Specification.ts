import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { doap } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Specification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function SpecificationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Specification> & RdfResourceCore> & Base {
  @namespace(doap)
  class SpecificationClass extends RdfsResourceMixin(Resource) implements Partial<Specification> {
  }
  return SpecificationClass
}

class SpecificationImpl extends SpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Specification>) {
    super(arg, init)
    this.types.add(doap.Specification)
  }

  static readonly __mixins: Mixin[] = [SpecificationMixin, RdfsResourceMixin];
}
SpecificationMixin.appliesTo = doap.Specification
SpecificationMixin.Class = SpecificationImpl
