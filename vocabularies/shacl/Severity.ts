import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/Resource';

export interface Severity extends Rdfs.Resource, RdfResource {
}

export function SeverityMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class SeverityClass extends RdfsResourceMixin(Resource) implements Severity {
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
