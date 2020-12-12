import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { doap } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Doap from '..';

export interface Version<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  'file-release': RDF.Term | undefined;
  os: RDF.Literal | undefined;
  platform: RDF.Literal | undefined;
  revision: RDF.Literal | undefined;
}

export function VersionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Version> & RdfResourceCore> & Base {
  @namespace(doap)
  class VersionClass extends Resource implements Partial<Version> {
    @property()
    'file-release': RDF.Term | undefined;
    @property()
    os: RDF.Literal | undefined;
    @property()
    platform: RDF.Literal | undefined;
    @property()
    revision: RDF.Literal | undefined;
  }
  return VersionClass
}

class VersionImpl extends VersionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Version>) {
    super(arg, init)
    this.types.add(doap.Version)
  }

  static readonly __mixins: Mixin[] = [VersionMixin];
}
VersionMixin.appliesTo = doap.Version
VersionMixin.Class = VersionImpl
