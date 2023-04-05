import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource.js';

export interface Severity<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function SeverityMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Severity> & RdfResourceCore> & Base {
  @namespace(sh)
  class SeverityClass extends RdfsResourceMixin(Resource) implements Partial<Severity> {
  }
  return SeverityClass
}

class SeverityImpl extends SeverityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Severity>) {
    super(arg, init)
    this.types.add(sh.Severity)
  }

  static readonly __mixins: Mixin[] = [SeverityMixin, RdfsResourceMixin];
}
SeverityMixin.appliesTo = sh.Severity
SeverityMixin.Class = SeverityImpl

export const fromPointer = createFactory<Severity>([RdfsResourceMixin, SeverityMixin], { types: [sh.Severity] });
