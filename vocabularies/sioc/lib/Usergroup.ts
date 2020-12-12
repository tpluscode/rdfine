import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sioc } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '..';

export interface Usergroup<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  'has_member': Sioc.UserAccount<D> | undefined;
  'usergroup_of': Sioc.Space<D> | undefined;
}

export function UsergroupMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Usergroup> & RdfResourceCore> & Base {
  @namespace(sioc)
  class UsergroupClass extends Resource implements Partial<Usergroup> {
    @property.resource({ implicitTypes: [sioc.UserAccount] })
    'has_member': Sioc.UserAccount | undefined;
    @property.resource({ implicitTypes: [sioc.Space] })
    'usergroup_of': Sioc.Space | undefined;
  }
  return UsergroupClass
}

class UsergroupImpl extends UsergroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Usergroup>) {
    super(arg, init)
    this.types.add(sioc.Usergroup)
  }

  static readonly __mixins: Mixin[] = [UsergroupMixin];
}
UsergroupMixin.appliesTo = sioc.Usergroup
UsergroupMixin.Class = UsergroupImpl
